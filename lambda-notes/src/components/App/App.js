import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import './App.css';
import Nav from '../Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Nav />
      </div>
    );
  }
}

export default App;
