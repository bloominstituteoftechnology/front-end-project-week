import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import SideNav from './Components/sideNav';
import CreateNewNote from './Components/createNewNote';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideNav />
      <CreateNewNote />
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
