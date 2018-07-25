import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { gettingAllNotes, addNote } from './actions';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';

class App extends Component {
  componentDidMount() {
    this.props.gettingAllNotes();
  }
  render() {
    return (
      <div className="App">
        {this.props.gettingNotes ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <Notes notes={this.props.notes} />
        )}
        <NoteForm addSmurf={this.props.addNote} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    gettingNotes: state.gettingNotes,
    gotNotes: state.gotNotes,
    selectedNote: state.selectedNote,
    addingNote: state.addingNote,
    addedNote: state.addedNote,
    updatingNote: state.updatingNote,
    updatedNote: state.updatedNote,
    deletingNote: state.deletingNote,
    deletedNote: state.deletedNote,
    error: state.note
  };
};

export default connect(
  mapStateToProps,
  { gettingAllNotes, addNote }
)(App);
