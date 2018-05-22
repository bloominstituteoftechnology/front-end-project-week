import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';
import Sidebar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-sideBar">
          <Sidebar />
        </div>
        <div className="App-main">
          <Board />
        </div>
      </div>  
    );
  }
}

export default App;
