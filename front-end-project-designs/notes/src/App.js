import React, { Component } from 'react';
import NotesSideBar from './Components/NotesSideBar';
import NotesDisplay from './Components/NotesDisplay';
import { Route } from 'react-router-dom';
import CreateNewNote from './Components/CreateNewNote';
import SingleNoteExpand from './Components/SingleNoteExpand';


import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className = "app-div">
        
          <NotesSideBar />

          <Route exact  path = '/notes' component = {NotesDisplay} />
          {/*<NotesDisplay /> */}
          <Route exact  path = '/create' component = {CreateNewNote} />

          <Route exact path = '/notes/:_id' component = {SingleNoteExpand } />

          <Route exact path = '/notes/delete/:_id' component = {SingleNoteExpand } />        
      </div>
    );
  }
}

export default App;
