import { observable, computed } from 'mobx';

class TodoStore {
  @observable todos = [{
    id: 1,
    title: "Pizza essen",
    completed: false
  }];

  addTodo(todo) {
    this.todos.push(todo);
  }

  changeTodo(index) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  @computed get todoCount() {
    return this.todos.length;
  }
}

export default new TodoStore();
