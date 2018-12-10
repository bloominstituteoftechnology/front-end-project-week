import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NotesListView from './views/NotesListView';
import NoteView from './views/NoteView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={NotesListView} />
        <Route path="/note/:noteId" component={NoteView} />
      </div>
    );
  }
}

export default App;
