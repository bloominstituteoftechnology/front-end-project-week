import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  NavColumn,
  PrimaryContainer
} from './components';

class App extends Component {
  render() {
    return (
      <div>
        <NavColumn />
        <PrimaryContainer />
      </div>
    );
  }
}

export default App;
