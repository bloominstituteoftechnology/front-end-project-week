import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CreateNoteView from './views/CreateNoteView';
import EditNoteView from './views/EditNoteView';
import NoteView from './views/NoteView';
import NotesListView from './views/NotesListView';
import Sidenav from './components/Sidenav';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Sidenav/>

      <Route path='/' component={NotesListView} />
      <Route path='/create-note' component={CreateNoteView} />
      <Route path='/note/:id' component={NoteView} />
      <Route path='/edit-note/:id' component={EditNoteView} />




      </div>
    );
  }
}

export default App;
