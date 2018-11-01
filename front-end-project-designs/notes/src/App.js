import React, { Component } from 'react';
import NotesSideBar from './Components/NotesSideBar';
import NotesDisplay from './Components/NotesDisplay';
import { Route } from 'react-router-dom';
import CreateNewNote from './Components/CreateNewNote';
import SingleNoteExpand from './Components/SingleNoteExpand';
import DeleteNote from './Components/DeleteNote';
import EditNote from './Components/EditNote';
import Authenticate from './Authenticate/Authenticate.js'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "app-div">
        
          <NotesSideBar />

          <Route exact  path = '/notes' component = {NotesDisplay} />
          
          <Route exact  path = '/create' component = {CreateNewNote} />

          <Route exact path = '/notes/:_id' component = {SingleNoteExpand } />

          <Route exact path = '/notes/delete/:_id' component = {DeleteNote } />   
          
          <Route exact path = '/notes/edit/:_id'  component = {EditNote}  />
      </div>
    );
  }
}

export default Authenticate(App);

