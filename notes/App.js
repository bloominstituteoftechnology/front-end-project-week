import React, { Component } from 'react';
import '../styles/App.css';
import TodoListContainer from './components/TodoListContainer';

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
