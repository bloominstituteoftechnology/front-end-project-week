import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NavigationBar from './components/Views/NavigationBar';
import NoteView from './components/Views/NoteView';
import NotesView from './components/Views/NotesView';
import CreateNoteView from './components/Views/CreateNoteView';
import EditNoteView from './components/Views/EditNoteView';

class App extends Component {
  render() {

    return (
      <div className="container">
        <NavigationBar />
        <div className="content">
          <div className="wrapper">
            <Route exact path='/' component={NotesView} />
            <Route path='/notes/:id' component={NoteView} />
            <Route path='/create' component={CreateNoteView} />
            <Route path='/edit/:id' component={EditNoteView} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
