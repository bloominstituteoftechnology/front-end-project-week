import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNotes, postNote } from '../actions';

import { ListNotes } from '../views/ListNotes';
// import AddNote from './Views/AddNote';
// import ReadNote from './Views/ReadNote';
// import UpdateNote from './Views/UpdateNote';

import Sidebar from './Sidebar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <ListNotes />
      </div>
    );
  }
}

export default App;
