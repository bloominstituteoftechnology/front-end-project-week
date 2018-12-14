import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Note from './Components/Note.js';
import NoteForm from './Components/NoteForm.js';
import NoteList from './Components/NoteList.js';
import Navbar from './Components/Navbar.js';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/notes")
      .then(res => this.setState({ notes: res.data }))
      .catch(e => { console.log(e) } )
  }

  addToNotes = newNote => {
    axios
      .post("http://localhost:3333/notes", newNote)
      .then(res => this.setState({ notes: res.data }, this.props.history.push('/')))
      .catch(e => { console.log(e) } )
  }

  deleteFromNotes = theNote => {
    const id = theNote[0].id.toString()
    const newNotes = this.state.notes.filter(note => note.id != id)
    this.setState({ notes: newNotes })
    /*
    axios
      .delete('http://localhost:3333/notes/', {
        data: { id: id }
      })
      .then(res => this.setState({ notes: res.data }, this.props.history.push('/')))
      .catch(e => { console.log(e) } )
    */
  }



  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" render={(props) => <NoteList {...props} notes={this.state.notes} noteDelete={this.deleteFromNotes}/> } />
        <Route path="/add-note" render={(props) => <NoteForm {...props} notes={this.state.notes} postNote={this.addToNotes} /> } />
      </div>
    );
  }
}
