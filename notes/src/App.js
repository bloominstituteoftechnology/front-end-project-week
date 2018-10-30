import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Notes from './components/Notes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Notes />
      </div>
    );
  }
}

export default App;
