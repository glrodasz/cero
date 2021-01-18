import Request from './request'

class Task extends Request {
  getAll() {
    return this.request()
  }

  getById({ id }) {
    return this.request(`tasks/${id}`)
  }

  create({ description }) {
    return this.request('tasks', { method: 'post', body: { description } })
  }

  delete({ id }) {
    return this.request(`tasks/${id}`, { method: 'delete' })
  }
}

export default Task
