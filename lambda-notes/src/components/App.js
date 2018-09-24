import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNotes, addNote, updateNote, deleteNote } from '../actions';

import NotesList from '../components/NotesList';
import NoteAdd from '../components/NoteAdd';
import NoteUpdate from '../components/NoteUpdate';
import NoteDelete from '../components/NoteDelete';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="App">
        <h1>Notes</h1>
        <div>
          <NotesList />
          <NoteAdd />
          <NoteUpdate />
          <NoteDelete />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingNotes: state.fetchingNotes,
    addingNote: state.addingNote,
    updatingNote: state.updatingNote,
    deletingNote: state.deletingNote
  }
}

export default connect(mapStateToProps, { fetchNotes, addNote, updateNote, deleteNote })(App);