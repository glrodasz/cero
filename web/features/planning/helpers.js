import { PRIOTIY_TASKS_QUANTITY } from './constants'

export const reorderTasks = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result.map((task, index) => ({ ...task, priority: index }))
}

export const getTaskType = (index) => {
  if (index > PRIOTIY_TASKS_QUANTITY - 1) {
    return null
  }

  return index === 0 ? 'active' : 'standby'
}
