import React, { Component } from 'react';
import NoteContainer from './containers/NoteContainer';

import { connect } from 'react-redux';
import { fetchNote, addNote, editNote, deleteNote } from './actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps,
  { fetchNote, addNote, editNote, deleteNote }
)(App);