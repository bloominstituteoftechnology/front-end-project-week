import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import Sidebar from './components/Sidebar';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import SingleNoteView from './components/SingleNoteView';
import { Route } from 'react-router-dom';
// import notesArray from './components/NotesArray';
import { connect } from 'react-redux';
import { getNotes, addNote, updateNote, deleteNote, searching } from './actions';
import { withRouter } from 'react-router';
import Authenticate from './components/Authenticate';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { compose } from 'redux';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      loggedIn: false,
      sorted: []
    }
  }

  componentDidMount() {
    this.props.getNotes();
    
    let username = localStorage.getItem('username');  
    if (username) {
      this.setState(function() {
        return {loggedIn: true, sorted: this.props.filteredNotes}
      })
    }

  }

  submitForm = (tags, title, textBody) => {
    this.props.addNote(tags, title, textBody);
  }

  submitEditForm = (ident, tags, title, textBody) => {
    this.props.updateNote(ident, tags, title, textBody);
    this.props.history.push('/'); 
  }

  deleteNote = (ident) => {
    this.props.deleteNote(ident);
  }

  filterData = (event) => {
    this.props.searching(event.target.value);
  }

  handleLogin = (user) => {
    localStorage.setItem('username', user);
  }

  cloneNote = (foundNote) => {
    this.props.addNote(foundNote.tags, foundNote.title, foundNote.textBody);
    this.props.history.push('/');
  }

  sortList = (button) => {
    if (button === 0) {
      this.setState({sorted: this.props.filteredNotes.sort(this.sortCompareDefault)})
    } else if (button === 1) {
      this.setState({sorted: this.props.filteredNotes.sort(this.sortCompareReversed)})
    } else if (button === 2) {
      this.setState({sorted: this.props.filteredNotes.sort(this.sortCompareTitlesNormal)})
    } else if (button === 3) {
      this.setState({sorted: this.props.filteredNotes.sort(this.sortCompareTitlesReversed)})
    } else if (button === 4) {
      this.setState({sorted: this.props.filteredNotes.sort(this.sortCompareTextNormal)})
    } else if (button === 5){
      this.setState({sorted: this.props.filteredNotes.sort(this.sortCompareTextReversed)})
    }
  }

  sortCompareDefault = (a, b) => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    } else {
      return 0;
    }
  }

  sortCompareReversed = (a, b) => {
    if (a.id > b.id) {
      return -1;
    } else if (a.id < b.id) {
      return 1;
    } else {
      return 0;
    }
  }

  sortCompareTitlesNormal = (a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  }

  sortCompareTitlesReversed = (a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return 1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }

  sortCompareTextNormal = (a, b) => {
    if (a.textBody.toLowerCase() < b.textBody.toLowerCase()) {
      return -1;
    } else if (a.textBody.toLowerCase() > b.textBody.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  }

  sortCompareTextReversed = (a, b) => {
    if (a.textBody.toLowerCase() < b.textBody.toLowerCase()) {
      return 1;
    } else if (a.textBody.toLowerCase() > b.textBody.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  }

  render() {
    // let sorted = this.props.filteredNotes.sort(this.sortCompareTitlesNormal);
    if (this.state.loggedIn) {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" render={props => (<NotesList {...props} notes={this.props.filteredNotes} filter={this.filterData} sortList={this.sortList} />)} />
        <Route path="/create" render={props => (<CreateNote {...props} notes={this.props.filteredNotes} submit={this.submitForm} />)} />
        <Route exact path="/notes/:id" render={props => (<SingleNoteView {...props} notes={this.props.filteredNotes} delete={this.deleteNote} clone={this.cloneNote} />)} />
        <Route path="/notes/:id/edit" render={props => (<EditNote {...props} notes={this.props.filteredNotes} submitEdit={this.submitEditForm} />)} />
      </div>
    );
    } else {
      return (
        <AuthenticatedApp handleLogin={this.handleLogin} />
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    searchText: state.searchText,
    filteredNotes: state.notes.filter(note => note.title.toLowerCase().includes(state.searchText.toLowerCase()) || note.textBody.toLowerCase().includes(state.searchText.toLowerCase())) 
  }
}

const AuthenticatedApp = Authenticate(App);

export default compose (
  withRouter,
  connect(mapStateToProps, { getNotes, addNote, updateNote, deleteNote, searching }),
  DragDropContext(HTML5Backend)
)(App);
