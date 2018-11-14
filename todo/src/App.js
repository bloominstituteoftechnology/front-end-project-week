import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      input: '',

      todolist: [
        {
          task: 'test task 1',
          id: 1,
          completed: false,
        }
      ],
    };
  }

  handleInput = (event) => {
    const {value} = event.target;
    this.setState({
      input: value,
    })
  }

  handleClick = (id) => {
    let list = this.state.todolist.slice();
    let todo = list.findIndex(todo => todo.id === id);
    list[todo].completed = true;
    this.setState({list: list});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      task: this.state.input,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      todolist: [...this.state.todolist, obj],
      input: '',
    })
  };

  render() {
    return (
      <div>
        <h2>Lambda Notes</h2>
        <TodoList todolist={this.state.todolist} handleClick={(id) => this.handleClick(id)} />
        <TodoForm 
          input={this.state.input}
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          />
      </div>
    )
  }
}

export default App;
