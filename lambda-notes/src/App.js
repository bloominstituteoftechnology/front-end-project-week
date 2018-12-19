import React, { Component } from 'react';
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
        <div className="side-bar">
          <h1>Lambda<br/> Notes</h1>
          <div className="nav view">
            <NavLink exact to="/" className="nav-button">View Your Notes</NavLink>
          </div>
          <div className ="nav create">
            <NavLink to="/create" className="nav-button">+ Create New Note</NavLink>
          </div>
        </div>

        <Route exact path="/" component={NotesList} />
        <Route path="/create" component={CreateNote} />
        <Route path="/view/:id" component={NoteView} />
        <Route path="/edit/:id" component={EditView} />
      </div>
    );
  }
}

export default App;
