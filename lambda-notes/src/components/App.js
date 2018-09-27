import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNotes, addNote, updateNote, deleteNote } from '../actions';

import NotesList from '../components/NotesList';
import NoteAdd from '../components/NoteAdd';
import NoteUpdate from '../components/NoteUpdate';
import Sidebar from '../components/Sidebar';

import './App.css';

class App extends Component {
  state = {
    newNote: {
      _id: -1,
      title: "",
      textBody: ""
    },
    selectedNote: {}
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
        ...this.state.newNote,
        _id: -1,
        title: "",
        textBody: ""
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar />

        <NotesList 
          notes={this.props.notes}
          deleteNote={this.props.deleteNote}
          updateNote={this.props.updateNote}
        />
        
        {/* <NoteAdd 
          newNote={this.state.newNote}
          handleInput={this.handleInput}
          addNote={this.addNote}
        />

        <NoteUpdate 
          updateNote={this.props.updateNote}
          note={this.props.notes[0]}
        /> */}
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