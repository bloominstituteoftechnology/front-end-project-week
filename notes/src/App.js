import React, { Component } from 'react';
import "./App.css";
import axios from "axios";
import NoteForm from "./components/NoteForm"


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



  render() {
    return (
      <div className="App">
      <h1 className='title'> Lambda Notes </h1>
      <NoteForm />

      
      </div>
    );
  }
}

export default App;
