import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Aside from './components/Aside/Aside';
import Notes from './components/Main/Notes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Aside />
        <Notes />
      </div>
    );
  }
}

export default App;
