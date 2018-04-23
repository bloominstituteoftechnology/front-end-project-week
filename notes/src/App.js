import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import notesTest from './components/notes'

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <div className="leftSide">
        <h1 className= "leftSideH1">Lambda Notes</h1>
        <button className="leftButtons"> View Your Notes </button>
        <button className="leftButtons"> +Create New Note </button>
      </div>
      </div>
    );
  }
}

export default App;
