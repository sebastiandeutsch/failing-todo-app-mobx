import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Container from './Container';
import Headline from './Headline';

import { inject, observer } from 'mobx-react';

@inject('TodoStore')
@observer
class App extends Component {
  handleAddTodo = (todo) => {
    this.props.TodoStore.addTodo(todo);
  };

  handleChangeTodo = (index) => {
    this.props.TodoStore.changeTodo(index);
  }

  render() {
    console.log(this.props);

    return (
      <Container>
        <Headline>Todos</Headline>
        <TodoForm onAddTodo={this.handleAddTodo} />
        <TodoList todos={this.props.TodoStore.todos} onChangeTodo={this.handleChangeTodo} />
      </Container>
    );
  }
}

export default App;
