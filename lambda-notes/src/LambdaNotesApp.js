import React, { Component } from 'react';
import NotesList from './components/notes-list/notes-list';
import LambdaNotesSidebar from './components/sidebar/sidebar';

class LambdaNotesApp extends Component {
  render() {
    return (
      <div className="lambda-notes-app">
        <LambdaNotesSidebar />
        <NotesList />
      </div>
    );
  }
}

export default LambdaNotesApp;
