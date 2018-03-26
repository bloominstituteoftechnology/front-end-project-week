import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NotesList from './components/NotesList';
import Navigation from './components/Navigation';
import './App.css';
import AddNote from './components/AddNote';

class App extends Component {
  render() {
    return (
      <div className='container'>
        
            <div className = 'notes-menu'>
              <h2> Lambda Notes </h2>
              <Navigation />
            </div>

            <div className = 'notes-list'>
              <h3>Your notes:</h3>
              <Route exact path = '/' component = { NotesList } />
              <Route  path = '/AddNote' component = { AddNote } />
            </div>
      </div>
    );
  }
}

export default App;
