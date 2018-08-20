import React, { Component } from 'react';
import NoteContainer from './containers/NoteContainer';

import { connect } from 'react-redux';
import { viewList, viewNote, addNote, editNote, deleteNote } from './actions';

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
  { viewList, viewNote, addNote, editNote, deleteNote }
)(App);