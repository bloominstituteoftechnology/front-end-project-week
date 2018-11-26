import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import UpdateNote from './components/UpdateNote';
import BigNote from './components/BigNote'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Lambda Notes</h1>
          <NavLink to="/create"><button>+ Create New Note</button></NavLink>
          <NavLink to="/NoteList"><button>View your Notes</button></NavLink>
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
