import React, { Component } from 'react';
import "./App.css";
import axios from "axios";
import NoteForm from "./components/NoteForm"
import Note from "./components/Note"
import { Route, NavLink, withRouter } from "react-router-dom";

class App extends Component {
constructor() {
  super();
  this.state= {
    notes: []
  }
}

componentDidMount() {  
  axios
    .get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => this.setState({ notes: response.data }))
    .catch(error => console.log(error))
}

addNote = (event, newNote) => {
  event.preventDefault();
  axios
    .post("https://fe-notes.herokuapp.com/note/create", newNote)
    .then(response => {
      newNote._id = response.data.success;
      this.setState({ notes: [newNote, ...this.state.notes] })
    })
    .catch(error => console.log(error))
}

deleteNote = (event, id) => {
  event.preventDefault();
  axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(() => {
      const deletedNote = this.state.notes.filter(note => {
        if (note._id !== id) {
          return note;
        }
      })
      this.setState({ notes: deletedNote })
    })
    .catch(error => console.log(error))
}

  render() {
    return (
      <div className="App">
      <h1 className='title'> Lambda Notes </h1>
      <div className="nav-button-container">
            <NavLink className="nav-buttons" to="/">
              View Your Notes
            </NavLink>
            <NavLink className="nav-buttons" to="/add-note">
              + Create New Note
            </NavLink>
            <Route path="/add-note" render={props => <NoteForm {...props} addNote={this.addNote} />} />
            <Route path="/note/:id" render={props => <Note {...props} deleteNote={this.deleteNote} />} />
      </div>
      </div>
    );
  }
}

export default App;
