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
      // id: Date.now(),
      title: note.title,
      textBody: note.textBody
    }
    console.log(note);
    axios
      .post('https://fe-notes.herokuapp.com/note/create', newNote)
      .then(response => {
          console.log(response)  ;
          // ...this.state.note,
          newNote.id = response.data.success;
          this.setState({
              notes: [...this.state.notes, newNote],
          })
      })
      .catch(err =>{
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
               <NotesList {...props} notes={this.state.notes}/>
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
