import React, { Component } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import toDoService from './lib/todo-service';
import './App.css';

class App extends Component {

  state = {
    toDos: [],
  }

  componentDidMount() {
    toDoService.list()
      .then((todos) => {
        this.setState({
          toDos: todos,
        })
      })
  }

  addToDo = (toDo) => {
    toDoService.create(toDo)
      .then((todo) => {
        this.setState(prevState => ({
          toDos: [...prevState.toDos, todo],
        }))
      })
  }

  updateToDo = (toDo) => {
    toDoService.update(toDo)
      .then((todo) => {
        console.log(todo);
        const foundTodo = this.state.toDos.find((element) => {
          return element._id === todo._id
        })
        const index = this.state.toDos.indexOf(foundTodo);
        const newToDos = [...this.state.toDos];
        newToDos.splice(index, 1, todo);
        this.setState({
          toDos: newToDos,
        })
      })
  }

  deleteToDo = (toDo) => {
    toDoService.delete(toDo)
      .then((deletedTodo) => {
        this.setState({ toDos: this.state.toDos.filter((todo) => {
          return todo._id !== deletedTodo._id
        })})
      })
  }

  render() {
    return (
      <div className="App">
        < ToDoForm addToDo={this.addToDo} />
        {this.state.toDos.length > 0 ? 
          < ToDoList toDos={this.state.toDos} deleteToDo={this.deleteToDo} updateToDo={this.updateToDo} />
        :
        null
        }
      </div>
    );
  }
}

export default App;
