import React, { Component } from 'react';
import Sidebar from './Sidebar';
import NoteGrid from '../components/NoteGrid';
import NewNote from '../components/NewNote.js';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import initialState from '../initialState';
import './App.css';

class App extends Component {
  state = {
    initialState,
  };
  render() {
    return (
      <Router>
        <div className="container-fluid d-flex">
            <Sidebar />
            <div className="col-9 main-content container-fluid align-items-center">
              <Route
                path="/" exact
                render={() => <NoteGrid notes={this.state.initialState} />}
              />
              <Route path="/new-note" render={() => <NewNote />} />
              </div>
          </div>
      </Router>
    );
  }
}

export default App;
