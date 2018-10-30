import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NavigationBar from './components/Navigation/NavigationBar';
import NotesList from './components/Notes/NotesList';
import Note from './components/Notes/Note';
import NewNote from './components/Notes/NewNote';

class App extends Component {
  render() {

    return (
      <div className="app-container">
        <NavigationBar />

        <div className="content-container">
          <div className="content-wrapper">
            <Route exact path='/' component={NotesList} />
            <Route path='/notes/:id' component={Note} />
            <Route path='/create' component={NewNote} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
