import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import ListView from './components/ListView';
import Navigation from './components/Navigation';
import NoteView from './components/NoteView';

import logo from './logo.svg';
import './App.css';

export default class App extends Component {
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
          <Route path = '/Navigation' component={Navigation} />
          <Route path = '/NoteView' component={NoteView} />
        </Switch>
      </div>
    );
  }
}

// export default App;
