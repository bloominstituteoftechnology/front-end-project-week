import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './App.css';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import NoteView from './components/NoteView';
import EditView from './components/EditView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lambda Notes</h1>

        <NavLink to="/">View Your Notes</NavLink>
        <NavLink to="/create">+Create New Note</NavLink>

        <Route exact path="/" component={NotesList} />
        <Route path="/create" component={CreateNote} />
        <Route path="/view/:id" component={NoteView} />
        <Route path="/edit/:id" component={EditView} />
      </div>
    );
  }
}

export default App;
