import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchNotes, fetchSingleNoteCard, addNote, updateNote, deleteNote } from '../actions';

import NotesList from '../components/NotesList';
import SingleNoteCard from '../components/SingleNoteCard';
import NoteAdd from '../components/NoteAdd';
import NoteUpdate from '../components/NoteUpdate';

import './App.css';

class App extends Component {
  state = {
    newNote: {
      title: "",
      content: ""
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
        title: "",
        content: ""
      }
    })
  }

  render() {
    return (
      <div className="App-container">

        <Route exact path="/" component={NotesList} />

        <Route path='/create' render={props => {
          return(<NoteAdd {...props}
            newNote={this.state.newNote}
            handleInput={this.handleInput}
            addNote={this.addNote}
            />)
        }} />

        <Route exact path='/note/:id' render={props => {
          return(
            <SingleNoteCard {...props}
              notes={this.props.notes}
              updateNote={this.props.updateNote}
              deleteNote={this.props.deleteNote} 
              fetchSingleNote={this.props.fetchSingleNoteCard}
            />)
        }}/>

        <Route exact path='/edit/:id' render={props => {
          return(
            <NoteUpdate {...props}
              updateNote={this.props.updateNote}
            />)
        }} />
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

export default connect(mapStateToProps, { fetchNotes, fetchSingleNoteCard, addNote, updateNote, deleteNote })(App);