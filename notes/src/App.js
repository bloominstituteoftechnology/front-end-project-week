import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import Sidebar from './components/Sidebar';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import SingleNoteView from './components/SingleNoteView';
import { Route } from 'react-router-dom';
import notesArray from './components/NotesArray';
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
      loggedIn: false
    }
  }

  componentDidMount() {
    // this.setState({notes: notesArray})
    this.props.getNotes();
    // this.setState({notes: this.props.notes})
    let username = localStorage.getItem('username');  
    if (username) {
      this.setState(function() {
        return {loggedIn: true}
      })
    }
  }

  submitForm = (tags, title, textBody) => {
    // this.setState(function (prevState, props) {
    //   return {
    //   notes: [...prevState.notes, {id: prevState.notes.length, title: title, textBody: textBody}]
    // }});
    
    this.props.addNote(tags, title, textBody);
  }

  submitEditForm = (ident, tags, title, textBody) => {
    // this.setState(function (prevState, props) {
    //   return {
    //     notes: prevState.notes.map(note => ident === note.id ? {id: ident, title, textBody} : note)

    // }});
    this.props.updateNote(ident, tags, title, textBody);
    this.props.history.push('/'); 
  }

  deleteNote = (ident) => {
    // this.setState(function (prevState, props) {
    //   return {
    //     notes: prevState.notes.filter(note => note.id !== ident)
    // }})
    this.props.deleteNote(ident);
  }

  filterData = (event) => {
    this.props.searching(event.target.value);
  }

  handleLogin = (user) => {
    localStorage.setItem('username', user);
  }

  render() {
    if (this.state.loggedIn) {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" render={props => (<NotesList {...props} notes={this.props.filteredNotes} filter={this.filterData} />)} />
        <Route path="/create" render={props => (<CreateNote {...props} notes={this.props.filteredNotes} submit={this.submitForm} />)} />
        <Route exact path="/notes/:id" render={props => (<SingleNoteView {...props} notes={this.props.filteredNotes} delete={this.deleteNote} />)} />
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
