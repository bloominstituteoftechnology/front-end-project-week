import React, { Component } from 'react';
import { Route } from 'react-router';

import './App.css';
import { Navigation } from './components/Navigation';
import NotesDisplay from './components/NotesDisplay/NotesDisplay';
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
