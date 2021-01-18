import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useQuery, useQueryCache, useMutation } from 'react-query'

import {
  FullHeightContent,
  Button,
  Avatar,
  Spacer,
  Heading,
  Paragraph,
  AddButton,
  Task,
} from '@glrodasz/components'

import tasks from '../features/planning/api'

export async function getStaticProps() {
  const initialTasks = await tasks.getAll()
  return { props: { initialTasks } }
}

function Planning(props) {
  const [shouldStart, setShouldStart] = useState(false)
  const cache = useQueryCache()
  const { isLoading, error, data } = useQuery('tasks', () => tasks.getAll(), {
    initialData: props.initialTasks,
  })

  const [addTask] = useMutation((params) => tasks.create(params), {
    onSuccess: () => {
      // Query Invalidations
      cache.invalidateQueries('tasks')
    },
  })

  const [deleteTask] = useMutation((params) => tasks.delete(params), {
    onSuccess: () => {
      // Query Invalidations
      cache.invalidateQueries('tasks')
    },
  })

  useEffect(() => {
    if (data?.length >= 1) {
      setShouldStart(true)
    } else {
      setShouldStart(false)
    }
  }, [data])

  const getTaskType = (index) => {
    if (index > 2) {
      return null
    }

    return index === 0 ? 'active' : 'standby'
  }

  if (isLoading) return 'Loading...'
  if (error) return `An error has ocurred ${error.message}`

  const [firstTask, secondTask, thirdTask, ...backlogTasks] = data
  const priorityTasks = [firstTask, secondTask, thirdTask]

  return (
    <>
      <FullHeightContent
        content={
          <>
            <div className="user-header">
              <Avatar src="https://placeimg.com/200/200/people" />
              <Spacer.Vertical size="sm" />
              <div className="text">
                <Heading size="lg">Hola, Cristian</Heading>
                <Paragraph size="lg">Conoce la metodologia RETO</Paragraph>
              </div>
            </div>
            <Spacer.Horizontal size="lg" />
            <Heading size="lg">
              Ahora dime, ¿cuál es la primera tarea en la que trabajarás hoy?
            </Heading>
            <Spacer.Horizontal size="md" />
            {priorityTasks?.map((task, index) => {
              return (
                <>
                  <Task
                    key={task.id}
                    onDelete={() => deleteTask({ id: task.id })}
                    isPending
                    type={getTaskType(index)}
                  >
                    {task.description}
                  </Task>
                  <Spacer.Horizontal size="xs" />
                </>
              )
            })}
            <div style={{ height: 5, margin: '10px 0', background: 'red' }} />
            {backlogTasks?.map((task) => {
              return (
                <>
                  <Task
                    key={task.id}
                    onDelete={() => deleteTask({ id: task.id })}
                    isPending
                  >
                    {task.description}
                  </Task>
                  <Spacer.Horizontal size="xs" />
                </>
              )
            })}
            <Spacer.Horizontal size="md" />
            <AddButton
              onAdd={(value) => addTask({ description: value })}
              focusHelpText="Presiona enter"
              blurHelpText="Clic para continuar"
            >
              Toca para agregar la tarea
            </AddButton>
          </>
        }
        footer={
          shouldStart ? (
            <>
              <Spacer.Horizontal size="lg" />
              <Paragraph size="sm">
                Basados en la matriz de Eisenhower priorizamos tus tareas
                evitando listas de pendientes saturadas.
              </Paragraph>
              <Spacer.Horizontal size="sm" />
              <Button isDisabled type="primary">
                Empieza ahora
              </Button>
            </>
          ) : null
        }
      />
      <style jsx>{`
        .user-header {
          display: flex;
        }

        .text {
          flex-direction: column;
          align-items: flex-start;
          display: flex;
        }
      `}</style>
    </>
  )
}

Planning.propTypes = {
  initialTasks: PropTypes.array,
}

export default Planning
