import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import { Route } from 'react-router-dom';
import Note from './components/Note';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';
import EditForm from './components/EditForm';

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: null
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

  editNote = (id, note) => {

    let editNote = {
      id: note._id,
      title: note.title,
      textBody: note.textBody,
      tag: []
    }

    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, editNote)
      .then(response => {
          editNote.id = response.data.success;

          // let newArray = this.state.notes.slice().concat(editNote);

          this.setState({
            // notes: newArray;
              notes: [...this.state.notes, editNote],
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
            <Route path="/notes/create" 
              render={props => 
                <AddNoteForm {...props} addNote={this.addNote}/>
              }
            />

            <Route exact path="/note/:id" 
              render={props =>
                <Note {...props} />
              }
            />

            <Route exact path="/edit/:id"
              render={props =>
                <EditForm {...props} editNote={this.editNote}/>
              }
            />
        </div>

      </div>
    );
  }
}

export default App;
