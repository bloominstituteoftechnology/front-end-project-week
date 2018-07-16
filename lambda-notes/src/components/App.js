import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Navigation from './Navigation';
import ListView from './ListView';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App">
          <div style={{display: 'none'}}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>

          <Navigation />
          <ListView />

        </div>
      </div>
    );
  }
}

export default App;
