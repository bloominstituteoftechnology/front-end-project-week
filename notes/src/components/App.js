import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import NotesListView from '../views/NotesListView';
import NoteFormView from '../views/NoteFormView';
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
        <Route path="/notes" component={NotesListView} />
        <Route path="/addNote" component={NoteFormView} />
      </div>
    );
  }
}

export default withRouter(App);
