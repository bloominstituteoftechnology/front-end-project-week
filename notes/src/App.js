import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

import './App.css';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import UpdateNote from './components/UpdateNote';
import BigNote from './components/BigNote'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h1>Lambda Notes</h1>
          <NavLink to="/create"><Button color="info">+ Create New Note</Button></NavLink>
          <NavLink to="/NoteList"><Button color="info">View your Notes</Button></NavLink>
        </div>

        <Route path="/create" render={props => <CreateNote {...props} />} />
        <Route path="/update/:id" render={props => <UpdateNote {...props} />} />
        <Route path="/Noteview/:id" render={props => <BigNote {...props} />} />
        <Route path="/NoteList" render={props => <NoteList {...props} />} />

      </div>
    );
  }
}

export default App;
