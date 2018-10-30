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
      _id: "",
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
        _id: "",
        title: "",
        content: ""
      }
    })
  }

  render() {
    return (
      <div className="App-container">

        <Route exact path="/" render={ (props) => {
          return(<NotesList {...props} 
            notes={this.props.notes} 
            />)
        }} />

        <Route path='/create' render={props => {
          return(<NoteAdd {...props}
            newNote={this.state.newNote}
            handleInput={this.handleInput}
            addNote={this.addNote}
            />)
        }} />

        <Route path='/note/:_id' render={props => {
          return(
            <SingleNoteCard {...props}
              notes={this.props.notes}
              deleteNote={this.props.deleteNote} 
              fetchSingleNote={this.props.fetchSingleNoteCard}
            />)
        }}/>

        <Route path='/edit/:_id' render={props => {
          return(
            <NoteUpdate {...props}
              notes={this.props.notes}
              updateNote={this.props.updateNote}
              singleFetchedNote={this.props.singleFetchedNote}
            />)
        }} />
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

export default connect(mapStateToProps, { fetchNotes, fetchSingleNoteCard, addNote, updateNote, deleteNote })(App);