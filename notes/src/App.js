import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import ListView from './components/ListView';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Route exact patch = '/' component={ListView} />
        </Switch>
      </div>
    );
  }
}

export default App;
