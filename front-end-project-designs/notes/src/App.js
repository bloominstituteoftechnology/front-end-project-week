import React, { Component } from 'react';
import NotesSideBar from './Components/NotesSideBar';
import NotesDisplay from './Components/NotesDisplay';
import { Route } from 'react-router-dom';
import CreateNewNote from './Components/CreateNewNote';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "app-div">
        
          <NotesSideBar />

          <Route exact  path = '/' component = {NotesDisplay} />
          {/*<NotesDisplay /> */}
          <Route exact  path = '/create' component = {CreateNewNote} />
                  
      </div>
    );
  }
}

export default App;
