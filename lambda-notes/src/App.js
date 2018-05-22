import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { }

class App extends Component {
  componentDidMount() {

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

      <div className="Notes-sidebar" style="width:25%">
        <h3 className="Notes-bar-item">Lambda Notes</h3>
        <a href="#" className="Notes-bar-item notes-button">View Your Notes</a>
        <a href="#" className="Notes-bar-item notes-button">'+' Create New Note</a>
      </div>

    );
  }
}

export default App;
