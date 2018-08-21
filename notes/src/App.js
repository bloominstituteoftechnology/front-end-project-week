import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import Sidebar from './components/Sidebar';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import SingleNoteView from './components/SingleNoteView';
import { Route } from 'react-router-dom';
import notesArray from './components/NotesArray';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.setState({notes: notesArray})
  }

  submitForm = (title, textBody) => {
    this.setState(function (prevState, props) {
      return {
      notes: [...prevState.notes, {id: prevState.notes.length, title: title, textBody: textBody}]
    }});
    this.forceUpdate();
  }

  submitEditForm = (id, title, textBody) => {
    this.setState(function (prevState, props) {
      return {
        notes: [...prevState.notes.slice(0, id), {id, title, textBody}, ...prevState.notes.slice(parseInt(id, 10)+1, prevState.notes.length)]

    }});
  }

  deleteNote = (ident) => {
    this.setState(function (prevState, props) {
      return {
        notes: [...prevState.notes.slice(0, ident), ...prevState.notes.slice(ident +1, prevState.notes.length)]
    }});
    this.state.notes.forEach((note, index) => this.setState({[note.id]: index}));
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" render={props => (<NotesList {...props} notes={this.state.notes} />)} />
        <Route path="/create" render={props => (<CreateNote {...props} notes={this.state.notes} submit={this.submitForm} />)} />
        <Route exact path="/notes/:id" render={props => (<SingleNoteView {...props} notes={this.state.notes} delete={this.deleteNote} />)} />
        <Route path="/notes/:id/edit" render={props => (<EditNote {...props} notes={this.state.notes} submitEdit={this.submitEditForm} />)} />
      </div>
    );
  }
}

export default App;
