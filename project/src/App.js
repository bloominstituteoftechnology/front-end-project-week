import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import displayList from './displayList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Front end week</h1>
        </header>
        <Route exact path="/" component={displayList}></Route>
      </div>
    );
  }
}

export default App;
