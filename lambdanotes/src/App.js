import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todoList.js';
import LeftBox from './components/LeftBox';
import CreateNote from './components/CreateNote';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
      <div className="App">
        <LeftBox />
        <EditNote />
      </div>
      </div>
    );
  }
}

export default App;
