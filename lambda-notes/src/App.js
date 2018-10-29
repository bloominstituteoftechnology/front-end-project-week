import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import LeftBar from './components/LeftBar';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';
import ExpandedNote from './components/ExpandedNote';
import EditNoteForm from './components/EditNoteForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      expandedNote: {}
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({notes: response.data}))
      .catch(error => console.log(error));
  }

  addNote = note => {
    axios
        .post('https://fe-notes.herokuapp.com/note/create', note)
        .then(response => console.log(response))
        .catch(error => console.log(error));
  }

  passThisNote = note => {
    this.setState({expandedNote: note});
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={LeftBar}/>
        <Route render={props => (<NotesList {...props} passThisNote={this.passThisNote} notes={this.state.notes} />)} exact path='/'/>
        <Route render={props => (<AddNoteForm {...props} addNote={this.addNote} />)} exact path='/AddNoteForm'/>
        <Route render={props => (<ExpandedNote {...props} expandedNote={this.state.expandedNote} />)} exact path='/ExpandedNote/:id'/>
        <Route render={props => (<EditNoteForm {...props} expandedNote={this.state.expandedNote} />)} exact path='/EditNote/:id'/>
      </div>
    );
  }
}

export default App;
