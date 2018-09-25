import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNotes, addNote, updateNote, deleteNote } from '../actions';

import NotesList from '../components/NotesList';

import './App.css';

class App extends Component {
  state = {
    newNote: {
      title: "",
      content: ""
    }
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  handleInput = event => {
    this.setState({
      newNote: {
        ...this.state.newNote,
        [event.target.name]: event.target.value
      }
    })
  }

  addNote = event => {
    event.preventDefault();
    this.props.addNote(this.state.newNote);
    this.setState({
      newNote: {
        title: "",
        content: ""
      }
    })
  }

  render() {
    return (
      <div className="App">
        {!this.props.fetchedNote ? (
          <h1>Loading notes...</h1>
          ) : (
          <div>
            <h1>Notes</h1>
            <NotesList 
              notes={this.props.notes}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    addingNote: state.addingNote,
    updatingNote: state.updatingNote,
    deletingNote: state.deletingNote
  }
}

export default connect(mapStateToProps, { fetchNotes, addNote, updateNote, deleteNote })(App);