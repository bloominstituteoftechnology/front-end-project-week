import React, { Component } from 'react';
import NoteContainer from './NoteContainer';
import Navbar from './navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <NoteContainer />
      </div>
    );
  }
}

export default App;
