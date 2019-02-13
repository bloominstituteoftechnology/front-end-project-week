import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import { Route } from 'react-router-dom';
import NotesList from './components/NotesList';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({notes: response.data})
      })
      .catch(err => {
        console.log(err);
      })
  }
  addNote = (note) => {

    const currentNotes = this.state.notes.slice();

    const newNote = {
      id: Date.now(),
      title: note.title,
      textBody: note.textBody,
      tags: ['legit', 'mstp', 'jquery']
    }

    if (newNote.title === '') {
      currentNotes.push();
    }
    else {
      currentNotes.push(newNote);
    }
    this.setState({notes: currentNotes});

  }
  render() {
    return (
      <div className="App">
        <div className="container">
            <Sidebar />
            <Route exact path="/" 
              render={props => 
               <NotesList {...props} notes={this.state.notes}/>
              }
            />
            <Route exact path="/notes/create" />
        </div>

      </div>
    );
  }
}

export default App;
