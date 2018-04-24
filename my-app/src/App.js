import React, { Component } from 'react';
import { Route } from 'react-router';

import './App.css';
import NotesDisplay from './components/NotesDisplay/NotesDisplay';
import NewNote from './components/NewNote/NewNote';
import Notes from './components/Notes/Notes';
import Edit from './components/Edit/Edit';
import { Delete } from './components/Delete/Delete';

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
        <Route exact path = '/' component={ NotesDisplay } />
        <Route path = '/newNote' component={ NewNote } />
        <Route path = '/noteView' component={ Notes } />
        <Route path = '/edit' component= { Edit } />
        {/* <Route path = '/delete' component= { Delete } /> */}
      </div>
    );
  }
}

export default App;
