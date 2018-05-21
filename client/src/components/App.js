import React, { Component } from 'react';

// components
import Sidebar from './sidebar/Sidebar';
import NoteView from './noteview/NoteView';

// presentational
import './App.css';
import logo from '../logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <NoteView/>
      </div>
    );
  }
}

export default App;
