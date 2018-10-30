import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NavigationBar from './components/Navigation/NavigationBar';
import NotesList from './components/Notes/NotesList';
import Note from './components/Notes/Note';


class App extends Component {
  render() {

    return (
      <div className="app-container">
        <NavigationBar />

        <Route exact path='/' component={NotesList} />
        <Route path='/:id' component={Note} />
      </div>
    );
  }
}

export default App;
