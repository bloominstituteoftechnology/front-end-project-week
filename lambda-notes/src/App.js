import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import LeftBar from './components/LeftBar';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';
import ExpandedNote from './components/ExpandedNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      expandedNoteId: ''
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({notes: response.data}))
      .catch(error => console.log(error));
  }

  addNote = note => {
    console.log(note);
    axios
        .post('https://fe-notes.herokuapp.com/note/create', note)
        .then(response => console.log(response))
        .catch(error => console.log(error));
  }

  passThisNote = id => {
    console.log('id', id);
    this.setState({expandedNoteId: id});
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={LeftBar}/>
        <Route render={props => (<NotesList {...props} passThisNote={this.passThisNote} notes={this.state.notes} />)} exact path='/'/>
        <Route render={props => (<AddNoteForm {...props} addNote={this.addNote} />)} exact path='/AddNoteForm'/>
        <Route render={props => (<ExpandedNote {...props} notes={this.state.notes} />)} exact path='/ExpandedNotes/:id'/>
      </div>
    );
  }
}

export default App;
