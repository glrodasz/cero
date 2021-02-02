import React from 'react'
import PropTypes from 'prop-types'
import { Task, Spacer, Divider, TaskCounter } from '@glrodasz/components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { PRIOTIY_TASKS_QUANTITY, MAXIMUM_BACKLOG_QUANTITY } from '../constants'
import { getTaskType } from '../helpers'

const TaskList = ({ tasks, onDragEnd, onDeleteTask }) => {
  return (
    <>
      {tasks?.length && (
        <TaskCounter current={tasks.length} total={MAXIMUM_BACKLOG_QUANTITY}>
          Tareas pendientes
        </TaskCounter>
      )}
      <Spacer.Horizontal size="md" />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="planning">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks?.map((task, index) => {
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
                            onDelete={() => onDeleteTask({ id: task.id })}
                            isPending
                            type={getTaskType(index)}
                          >
                            {task.description}
                          </Task>
                        </div>
                      )}
                    </Draggable>
                    <Spacer.Horizontal size="sm" />
                    {index === PRIOTIY_TASKS_QUANTITY - 1 && (
                      <>
                        <Divider />
                        <Spacer.Horizontal size="sm" />
                      </>
                    )}
                  </>
                )
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

TaskList.propTypes = {
  onDragEnd: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
    })
  ),
}

export default TaskList
