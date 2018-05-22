import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import SideNavigation from './components/main/SideNavigation.js';
import MainBody from './components/main/MainBody.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <SideNavigation />
      </div>
    );
  }
}

export default App;