import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards.js';
import Input from './Components/Input.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
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
        
        <div>
          <h2> Your Notes </h2>
          <Cards />
          <Input />
        </div>
      </div>
    );
  }
}

export default App;
