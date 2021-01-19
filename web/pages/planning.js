import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useQuery, useQueryCache, useMutation } from 'react-query'
import {
  resetServerContext,
  DragDropContext,
  Droppable,
  Draggable,
} from 'react-beautiful-dnd'

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

const PRIOTIY_TASKS_QUANTITY = 3

export async function getStaticProps() {
  const initialTasks = await tasks.getAll()
  // FIXME: Evaluate when this resetServerContext is necessary.
  resetServerContext()
  return { props: { initialTasks } }
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result.map((task, index) => ({ ...task, priority: index }))
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

  const [updatePriorities] = useMutation(
    (params) => tasks.updatePriorities(params),
    {
      onSuccess: () => {
        // Query Invalidations
        cache.invalidateQueries('tasks')
      },
    }
  )

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
    if (index > PRIOTIY_TASKS_QUANTITY - 1) {
      return null
    }

    return index === 0 ? 'active' : 'standby'
  }

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const sourceIndex = result.source.index
    const destinationIndex = result.destination.index

    const orderedTasks = reorder(data, sourceIndex, destinationIndex)

    updatePriorities({ tasks: orderedTasks })
  }

  if (isLoading) return 'Loading...'
  if (error) return `An error has ocurred ${error.message}`

  // const { priorityTasks, backlogTasks } = splitTasks(data)

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
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="planning">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    // style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {data?.map((task, index) => {
                      return (
                        <>
                          <Draggable
                            key={task.id}
                            draggableId={String(task.id)}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={provided.draggableProps.style}
                              >
                                <Task
                                  key={task.id}
                                  onDelete={() => deleteTask({ id: task.id })}
                                  isPending
                                  type={getTaskType(index)}
                                >
                                  {task.description}
                                </Task>
                                {index === PRIOTIY_TASKS_QUANTITY - 1 && (
                                  <div
                                    style={{
                                      height: 5,
                                      margin: '10px 0',
                                      background: 'red',
                                    }}
                                  />
                                )}
                                <Spacer.Horizontal size="xs" />
                              </div>
                            )}
                          </Draggable>
                        </>
                      )
                    })}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <Spacer.Horizontal size="md" />
            <AddButton
              onAdd={(value) =>
                addTask({ description: value, priority: data.length })
              }
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
