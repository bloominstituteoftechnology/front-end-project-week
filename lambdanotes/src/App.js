import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="Name-header">Lambda Notes</h1>
        <button className="Button-view">View Your Notes</button>
        <button className="Button-create">+ Create New Note</button>
        </header>
      </div>
    );
  }
}

export default App;
