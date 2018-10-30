// React imports
import React, { Component } from 'react';
// CSS imports
import './App.css';
// Component imports
import {
  SideNavigationView,
  ListView,
  NoteFormView,
  SingleNoteView,
  EditNoteFormView
} from './views';
// React Router imports
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNavigationView />
        <Route exact path="/" render={props => <ListView {...props} />} />
        <Route
          path="/note/get/:id"
          render={props => <SingleNoteView {...props} />}
        />
        <Route
          path="/add-notes-form"
          render={props => <NoteFormView {...props} />}
        />
        <Route
          path="/edit-note-form/:id"
          render={props => <EditNoteFormView {...props} />}
        />
      </div>
    );
  }
}

export default App;
