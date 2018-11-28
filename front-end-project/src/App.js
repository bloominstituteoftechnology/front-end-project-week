import React, { Component } from 'react';
import './App.css';
import Sideview from './components/Sideview.js'
import Notes from './components/Notes.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sideview />
        <Notes />
      </div>
    );
  }
}

export default App;