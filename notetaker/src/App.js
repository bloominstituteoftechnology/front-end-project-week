import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import NewNote from './components/NewNote';
import Note from './components/Note';
import EditNote from './components/EditNote';
import DeleteNote from './components/DeleteNote'

class App extends Component {
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
        <Route exact path="/" component={ Dashboard }/>
        <Route path="/create" component={ NewNote }/>
        <Route path="/note" component={ Note }/>
        <Route path="/edit" component={ EditNote }/>
        <Route path="/delete" component={ DeleteNote }/>
      </div>
    );
  }
}

export default App;
