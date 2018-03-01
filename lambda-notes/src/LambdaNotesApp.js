import React, { Component } from 'react';
import NotesList from './components/notes-list/notes-list';
import logo from './logo.svg';
import './App.css';

class LambdaNotesApp extends Component {
  render() {
    return (
      <div className="lambda-notes-app">
        <div>Sidebar</div>
        <NotesList />
      </div>
    );
  }
}

export default LambdaNotesApp;
