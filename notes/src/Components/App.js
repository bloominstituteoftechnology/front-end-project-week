import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

const mapStateToProps = state => {
  console.log('the state', state)
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes
  }
}

export default connect(
  mapStateToProps,
  { getNotes, postNote }
)(App);