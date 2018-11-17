import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import UpdateNote from './components/UpdateNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/create"><button>New Note</button></NavLink>

        <Route path="/create" component={CreateNote} />
        <Route path="/update/:id" component={UpdateNote} />       

        <h1>Lambda Notes</h1>
        <NoteList />
      </div>
    );
  }
}

export default App;
