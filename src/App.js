import React, { Component } from 'react';
import Todos from './components/Todos/';
import AddTodo from './components/AddTodo/';
import './App.scss';

class App extends Component {
  state = {
    todos: [],
    total: 0,
  };

  deleteTodo = (id) => {
    this.setState((prevState) => {
      return { todos: prevState.todos.filter((todo) => todo.id !== id) };
    });
  };

  addTodo = (data) => {
    console.log(data.content);
    data.content.id = this.state.todos.length + 1;
    this.setState({
      todos: [...this.state.todos, data.content],
    });
  };

  render() {
    return (
      <>
        <div className='todo-list'>
          <h1 className='center blue-text'>Grace's List</h1>
          <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
          <AddTodo addTodo={this.addTodo} />
        </div>
        <button className='print_button'
          onClick={() => {
            window.print();
            return false;
          }}
        >
          Print
        </button>
      </>
    );
  }
}

export default App;
