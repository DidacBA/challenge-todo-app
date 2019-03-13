import React, { Component } from 'react';

export default class ToDoForm extends Component {

  state = {
    title: '',
  }

  handleChange = (event) => {
    this.setState({title: event.target.value})
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.addToDo(this.state);
  }

  render() {
    return (
      <div>
        <form action="">
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Add task</button>
        </form>
      </div>
    )
  }
}
