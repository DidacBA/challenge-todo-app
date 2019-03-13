import React, { Component } from 'react'

export default class ToDoCard extends Component {
  state = {
    isUpdating: false,
    newTitle: '',
  }

  showUpdateForm = () => {
    this.setState({
      isUpdating: !this.state.isUpdating,
    })
  }

  handleChange = (event) => {
    this.setState({newTitle: event.target.value})
  }

  handleClick = (event) => {
    event.preventDefault();
    const {newTitle} = this.state;
    const newToDo = Object.assign({}, this.props.todo);
    newToDo.title = newTitle;
    this.props.updateToDo(newToDo);
    this.setState({
      isUpdating: !this.state.isUpdating,
    })
  }

  render() {
    return (
      <div>
        {this.props.todo.title}
        <button onClick={() => {
          this.showUpdateForm();
        }}>Update</button>
        <button onClick={() => {
          this.props.deleteToDo(this.props.todo);
        }}>Delete</button>
        {
          this.state.isUpdating ?
            <form action="">
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <button onClick={this.handleClick}>Update task</button>
            </form>
          :
            null
        }
      </div>
    )
  }
}
