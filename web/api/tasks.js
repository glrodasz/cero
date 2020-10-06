import Request from "./request";

class Task extends Request {
  getAll() {
    return this.request();
  }

  getById({ id }) {
    return this.request(`tasks/${id}`);
  }
}

export default Task;
