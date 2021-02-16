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
} from '@glrodasz/components'

import TaskList from '../components/TaskList'

import { MAXIMUM_BACKLOG_QUANTITY } from '../constants'
import { tasksApi, focusSessionsApi } from '../api'
import { reorderTasks } from '../helpers'

const PlanningContainer = ({ initialData }) => {
  const cache = useQueryCache()

  // Focus Sessions
  const [createFocusSession] = useMutation(
    (params) => focusSessionsApi.create(params),
    {
      onSuccess: () => {
        // Query Invalidations
        cache.invalidateQueries('focusSessions')
      },
    }
  )

  // Tasks
  const { isLoading, error, data } = useQuery(
    'tasks',
    () => tasksApi.getAll(),
    {
      initialData,
    }
  )
  const [tasks, setTasks] = useState(data)

  const [createTask] = useMutation((params) => tasksApi.create(params), {
    onSuccess: () => {
      // Query Invalidations
      cache.invalidateQueries('tasks')
    },
  })

  const [updatePriorities] = useMutation(
    (params) => tasksApi.updatePriorities(params),
    {
      onSuccess: () => {
        // Query Invalidations
        cache.invalidateQueries('tasks')
      },
    }
  )

  const [deleteTask] = useMutation((params) => tasksApi.delete(params), {
    onSuccess: () => {
      // Query Invalidations
      cache.invalidateQueries('tasks')
    },
  })

  useEffect(() => {
    setTasks(data)
  }, [data])

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const sourceIndex = result.source.index
    const destinationIndex = result.destination.index

    const orderedTasks = reorderTasks(tasks, sourceIndex, destinationIndex)
    setTasks(orderedTasks)

    updatePriorities({ tasks: orderedTasks })
  }

  // TODO: Create LoadingError Component (Loading, Error)
  if (isLoading) return 'Loading...'
  if (error) return `An error has ocurred ${error.message}`

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
            {tasks?.length == 0 && (
              <>
                <Spacer.Horizontal size="lg" />
                <Heading size="lg">
                  Ahora dime, ¿cuál es la primera tarea en la que trabajarás
                  hoy?
                </Heading>
              </>
            )}
            <TaskList
              tasks={tasks}
              onDragEnd={onDragEnd}
              onDeleteTask={deleteTask}
            />
            {tasks?.length === 1 && (
              <>
                <Spacer.Horizontal size="md" />
                <Heading size="lg">
                  Continúa listando las demás tareas de tu día...
                </Heading>
              </>
            )}
            {tasks?.length < MAXIMUM_BACKLOG_QUANTITY && (
              <>
                <Spacer.Horizontal size="md" />
                <AddButton
                  onAdd={(value) =>
                    createTask({ description: value, priority: tasks.length })
                  }
                  focusHelpText="Presiona enter"
                  blurHelpText="Clic para continuar"
                >
                  Toca para agregar la tarea
                </AddButton>
              </>
            )}
          </>
        }
        footer={
          !!tasks?.length >= 1 && (
            <>
              <Spacer.Horizontal size="lg" />
              <Paragraph size="sm">
                Basados en la matriz de Eisenhower priorizamos tus tareas
                evitando listas de pendientes saturadas.
              </Paragraph>
              <Spacer.Horizontal size="sm" />
              <Button
                onClick={() => createFocusSession()}
                isDisabled
                type="primary"
              >
                Empieza ahora
              </Button>
            </>
          )
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

PlanningContainer.propTypes = {
  initialData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
    })
  ),
}

export default PlanningContainer
