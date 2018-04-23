import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import {
  NavColumn,
  PrimaryContainer,
  NewNote
} from './components';

class App extends Component {
  render() {
    return (
      <div className="App__container">
        <NavColumn />
        <Route exact path="/" component={PrimaryContainer} />
        <Route path="/create" component={NewNote} />
      </div>
    );
  }
}

export default App;
