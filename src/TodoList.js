import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })).isRequired,
    onChangeTodo: PropTypes.func.isRequired
  };

  handleChangeCompletedClick = (event) => {
    const index = parseInt(event.target.dataset.index, 10);

    this.props.onChangeTodo(index);
  }

  render() {
    return (
      <ul className="TodoList">
        {this.props.todos.map( (todo, index) => {
          if (todo.completed) {
            return (
              <li onClick={this.handleChangeCompletedClick} data-index={index} key={todo.id} className="todo-completed">
                {todo.title}
              </li>
            );
          } else {
            return (
              <li onClick={this.handleChangeCompletedClick} data-index={index} key={todo.id}>
                {todo.title}
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

