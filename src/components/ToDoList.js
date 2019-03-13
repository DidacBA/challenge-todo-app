import React, { Component } from 'react';
import ToDoCard from './ToDoCard';

export default class ToDoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.toDos.map((todo) => {
            return < ToDoCard
              key={todo._id}
              todo={todo} 
              updateToDo={this.props.updateToDo}
              deleteToDo={this.props.deleteToDo} />
          })}
        </ul>
      </div>
    )
  }
}