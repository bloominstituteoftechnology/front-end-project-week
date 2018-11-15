import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

import NotesList from './components/NotesList'
import CreateNewNote from './components/CreateNewNote'

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [],
    }
  }

  componentDidMount(){
    axios
    .get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then(response => {
        this.setState({ notes: response.data })
    })
    .catch(err => {
      console.log("Fail to GET notes from server", err)
    })
  }

  handleAddNewNote = note => {
    axios 
    .post(`https://fe-notes.herokuapp.com/note/create`, note)
    .then(response => {
      this.setState({ notes: response.data })
    })
    .catch(err => {
      console.log("Fail to POST a note to the server", err)
    })
  }

  handleDeleteNote = id => {
    axios 
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      this.setState({ notes: response.data })
    })
    .catch(err => {
      console.log("Fail to DELETE a note", err)
    })
  }
  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          

          <CreateNewNote handleAddNewNote={this.handleAddNewNote}/>

          <p>
            Lambda Notes Components.
          </p>

          <NotesList 
            notes={this.state.notes}
            handleDeleteNote={this.handleDeleteNote}
          />

          <p>
            Edit View (update).
          </p>
          <p>
            Delete Modal
          </p>
        </header>
      </div>
    );
  }
}

export default App;
