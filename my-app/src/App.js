import React, { Component } from 'react';
import './App.css';
import NotesDisplay from './components/NotesDisplay/NotesDisplay';
import { Route } from 'react-router';
import { Navigation } from './components/Navigation';
import NewNote from './components/NewNote/NewNote';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path = '/' component={NotesDisplay} />
        <Route path = '/newNote' component={NewNote} />
      </div>
    );
  }
}

export default App;
