import React, { Component } from 'react';
import Sidebar from './Sidebar';
import NoteGrid from '../components/NoteGrid';
import NewNote from '../components/NewNote.js';
import NoteFull from '../components/NoteFull.js';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container d-flex">
          <Sidebar />
          <div className="col-9 main-content container-fluid align-items-center">
            <Route path="/" exact component={NoteGrid} />
            <Route path="/new-note" component={NewNote} />
            <Route path="/view-note/:id" component={NoteFull} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
