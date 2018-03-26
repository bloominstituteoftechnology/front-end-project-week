import React, { Component } from 'react';
import './App.css';
import NewNote from './NewNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Notes</p>
        <NewNote />
      </div>
    );
  }
}

export default App;
