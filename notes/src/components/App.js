import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import NotesListView from '../views/NotesListView';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  componentDidMount
  render() {
    return (
      <div className="App">
      <div className="sidebar">
        <h1>Lambda Notes</h1>
        </div>
        <Route path="/notes" component={NotesListView} />
      </div>
    );
  }
}

export default withRouter(App);
