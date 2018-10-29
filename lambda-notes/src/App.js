import React, { Component } from 'react';
import './App.css';
import { TodosView } from './Views.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodosView />
      </div>
    );
  }
}

export default App;
