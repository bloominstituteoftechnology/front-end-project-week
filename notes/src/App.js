import React, { Component } from 'react';
import './App.css';
import TodoListContainer from './components/Friends.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lambda notes</h1>
        </header>
        <TodoListContainer />
      </div>
    );
  }
}
export default App;
