import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { Route } from 'react-router-dom';
import Notes from './components/Notes';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';

import { withRouter } from 'react-router-dom'; 

import { connect } from 'react-redux';
import { fetchNotes, newNote, deleteNote, editNote } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []

    }
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  componentDidUpdate() {
    this.props.fetchNotes();
  }

  addNote = (note) => {
    console.log('addNote', this.props.notes)
    this.props.newNote(note);
  }

  deleteNote = (id) => {
    console.log(id);
    this.props.deleteNote(id);
  }

  editNote = (updatedNote) => {
    this.props.editNote(updatedNote);
  }

  render() {
    return (
      <div className="App">
        {/* SideBar always visible */}
        <SideBar />
        {/* Routes based on SideBar navigations or main-view navigations - note, edit, delete */}
        {/* main-view with all notes */}
        <Route exact path='/' render={props => ( <Notes {...props} notes={this.props.notes} /> )} />
        {/* main-view with specific note, contains DeleteNote component */}
        <Route path='/note/:id' render={props => ( <Note {...props} notes={this.props.notes} deleteNote={this.deleteNote} /> )} />
        {/* main-view create note goes here, class component */}
        <Route exact path='/create-note' render={props => ( <CreateNote {...props} notes={this.props.notes} addNote={this.addNote} /> )} />
        {/* main-view edit note goes here, class component */}
        <Route exact path='/note-edit/:id' render={props => ( <EditNote {...props} notes={this.props.notes} editNote={this.editNote} /> )} /> 
    </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('mapState state', state);
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
  }
}

export default withRouter(connect(mapStateToProps, {fetchNotes, newNote, deleteNote, editNote})(App));
