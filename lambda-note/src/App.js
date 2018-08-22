import React, { Component } from 'react';
import NoteContainer from './containers/NoteContainer';

import { connect } from 'react-redux';
import { fetchNote, viewNote, viewAddNote, viewEditNote, viewDeleteNote, addNote, editNote, deleteNote, noSearch, searchNote } from './actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteContainer {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(
  mapStateToProps,
  { fetchNote, viewNote, viewAddNote, viewEditNote, viewDeleteNote, addNote, editNote, deleteNote, noSearch, searchNote }
)(App);