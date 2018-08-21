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
import { getNotes, addNote, updateNote, deleteNote } from './actions';
import { withRouter } from 'react-router';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    // this.setState({notes: notesArray})
    this.props.getNotes();
  }

  submitForm = (tags, title, textBody) => {
    // this.setState(function (prevState, props) {
    //   return {
    //   notes: [...prevState.notes, {id: prevState.notes.length, title: title, textBody: textBody}]
    // }});
    // this.forceUpdate();
    this.props.addNote(tags, title, textBody);
  }

  submitEditForm = (ident, tags, title, textBody) => {
    // this.setState(function (prevState, props) {
    //   return {
    //     notes: prevState.notes.map(note => ident === note.id ? {id: ident, title, textBody} : note)

    // }});
    this.props.updateNote(ident, tags, title, textBody);
    this.props.history.push('/');
    this.forceUpdate();
  }

  deleteNote = (ident) => {
    // this.setState(function (prevState, props) {
    //   return {
    //     notes: prevState.notes.filter(note => note.id !== ident)
    // }})
    this.props.deleteNote(ident);
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" render={props => (<NotesList {...props} notes={this.props.notes} />)} />
        <Route path="/create" render={props => (<CreateNote {...props} notes={this.props.notes} submit={this.submitForm} />)} />
        <Route exact path="/notes/:id" render={props => (<SingleNoteView {...props} notes={this.props.notes} delete={this.deleteNote} />)} />
        <Route path="/notes/:id/edit" render={props => (<EditNote {...props} notes={this.props.notes} submitEdit={this.submitEditForm} />)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default withRouter(connect(mapStateToProps, { getNotes, addNote, updateNote, deleteNote })(App));
