import Request from './request'

class Task extends Request {
  getAll() {
    // TODO: Implement a sort param, and remove the hardcoded
    return this.request('tasks?_sort=priority&_order=asc')
  }

  getById({ id }) {
    return this.request(`tasks/${id}`)
  }

  create({ description, priority }) {
    return this.request('tasks', {
      method: 'post',
      body: { description, priority },
    })
  }

  updatePriorities({ tasks }) {
    return Promise.all(
      tasks.map(({ id, priority }) =>
        this.request(`tasks/${id}`, { method: 'patch', body: { priority } })
      )
    )
  }

  delete({ id }) {
    return this.request(`tasks/${id}`, { method: 'delete' })
  }
}

export default Task
