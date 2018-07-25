import React, { Component} from 'react';

let counter = 3;

export default class TodoForm extends Component {
  handleAddTodoClick = (event) => {
    const todo = {
      id: counter++,
      title: this.refs.todo.value,
      completed: false
    };

    this.props.onAddTodo(todo);
  };

  render() {
    return (
      <div>
        <input ref="todo" defaultValue="Zimmer aufräumen" />
        <button onClick={this.handleAddTodoClick}>Todo hinzufügen</button>
      </div>
    );
  }
}
