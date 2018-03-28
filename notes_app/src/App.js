import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NoteList from './components/noteList';
import noteList from './components/noteList.css';
import Buttons from './components/buttons/Buttons.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteList />
      </div>
    );
  }
}

export default App;

