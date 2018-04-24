import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todoList.js';
import LeftBox from './components/LeftBox';
import CreateNote from './components/CreateNote';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
      <div className="App">
        <LeftBox />
        <TodoList/>
      </div>
      </div>
    );
  }
}

export default App;
