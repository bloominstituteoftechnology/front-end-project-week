import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  nextId = 4;
  state = {
    notes: [
      {
        id: 1,
        title: 'Note Title',
        content: 'content content content content content content content content'
      }
    ]
    
  }
  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
