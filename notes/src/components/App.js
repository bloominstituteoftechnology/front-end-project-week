import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import NotesListView from '../views/NotesListView';
import NoteFormView from '../views/NoteFormView';
import NoteView from '../views/NoteView';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  componentDidMount
  render() {
    return (
      <div className="App">
      <div className="sidebar">
        <h1>Lambda Notes</h1>
        <NavLink to="/notes" activeClassName="activeNavButton">
        View Your Notes
        </NavLink>
        <NavLink to="/addNote" activeClassName="activeNavButton">
        + Create New Note
        </NavLink>

        </div>
        <Route exact path="/notes" component={NotesListView} />
        <Route exact path="/addNote" component={NoteFormView} />
        <Route exact path="/notes/:noteId" component={NoteView} />
      </div>
    );
  }
}

export default withRouter(App);
