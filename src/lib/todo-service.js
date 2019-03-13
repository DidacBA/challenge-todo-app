import axios from 'axios';

class ToDoService {
  constructor() {
    this.todo = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
    })
  }

  list() {
    return this.todo.get('/todos')
      .then(({data}) => data)
  }

  getSingle(todo) {
    const { _id } = todo;
    return this.todo.get(`todos/${_id}`)
      .then(({ data }) => data)
  }

  create(todo) {
    const { title } = todo;
    return this.todo.post('/todos', {title})
      .then(({ data }) => data)
  }

  update(todo) {
    const { _id, title } = todo;
    return this.todo.put(`/todos/${_id}`, {title})
      .then(({ data }) => data)
  }

  delete(todo) {
    const { _id } = todo;
    return this.todo.delete(`/todos/${_id}`)
      .then(({ data }) => data)
  }
}

const toDoService = new ToDoService();

export default toDoService;