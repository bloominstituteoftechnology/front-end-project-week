import React, { Component } from 'react';
import { Route } from 'react-router';

import './App.css';
import NotesDisplay from './components/NotesDisplay/NotesDisplay';
import NewNote from './components/NewNote/NewNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      note: []
    }
  }
  
  render() {
    return (
      <div>
        <Route exact path = '/' component={NotesDisplay} />
        <Route path = '/newNote' component={NewNote} />
      </div>
    );
  }
}

export default App;
