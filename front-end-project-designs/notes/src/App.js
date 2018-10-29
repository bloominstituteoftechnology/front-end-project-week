import React, { Component } from 'react';
import NotesSideBar from './Components/NotesSideBar';
import NotesDisplay from './Components/NotesDisplay';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "app-div">
        
          <NotesSideBar />
          <NotesDisplay />
        
      </div>
    );
  }
}

export default App;
