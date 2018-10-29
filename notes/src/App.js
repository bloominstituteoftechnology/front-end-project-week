import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
