import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todoList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Lambda Notes
        </h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
