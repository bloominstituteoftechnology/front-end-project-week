import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import { Route } from 'react-router-dom';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';

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
  addNote = note => {

    const newNote = {
      title: note.title,
      textBody: note.textBody
    }

    axios
      .post('https://fe-notes.herokuapp.com/note/create', newNote)
      .then(response => {
          newNote.id = response.data.success;
          this.setState({
              notes: [...this.state.notes, newNote],
          })
      })
      .catch(err =>{
          console.log(err);
      })

  }

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        let newNotes = this.state.notes.filter(note => id !== note._id);
        this.setState({
          notes: newNotes
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
            <Sidebar />
            <Route exact path="/" 
              render={props => 
               <NotesList {...props} notes={this.state.notes} deleteNote={this.deleteNote}/>
              }
            />
            <Route exact path="/notes/create" 
              render={props => 
                <AddNoteForm {...props} addNote={this.addNote}/>
              }
            />
        </div>

      </div>
    );
  }
}

export default App;
