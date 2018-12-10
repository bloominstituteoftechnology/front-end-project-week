import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route} from 'react-router-dom';
import axios from 'axios';

import Menu from './Components/Menu/Menu'
import NotesList from './Components/Notes/NotesList';
import NoteForm from './Components/Notes/NoteForm';
import NoteView from './Components/Notes/NoteView';
import DeleteModal from './Components/Notes/DeleteModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {notes: []}
  }

  componentDidMount() {
    this.getNotes()
  }

  getNotes = () => {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then(response => {
      this.setState({
        notes: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  createNote = (note) => {
    axios.post(`https://fe-notes.herokuapp.com/note/create`, note)
    .then( () => {
      this.getNotes();
    })
    .catch(error => {
      console.log(error);
    })
  }

  updateNote = (id, note) => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then( () => {
      this.getNotes();
    })
    .catch(error => {
      console.log(error);
    })
  }

  deleteNote = (id) => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then( () => {
      this.getNotes();
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return(
    <div className = 'App'>
    <nav className = 'menu'>
      <h1>Lambda<br/>Notes</h1>
      <Menu />
    </nav>
    <main className = 'notes-section'>
      <Route exact path='/'
          render={(props) => <NotesList {...props} notes={this.state.notes}/>}
      />
      <Route path='/notes/create'
        render={(props) => <NoteForm {...props} type='Create' updateValue={this.updateValue} createNote={this.createNote} />}
      />
      <Route exact path='/note/:id'
        render={(props) => <NoteView {...props} notes={this.state.notes} deleteNote={this.deleteNote}/>}
      />
      <Route exact path='/note/:id/delete'
        render={(props) => <NoteView {...props} notes={this.state.notes} deleteNote={this.deleteNote}/>}
      />
        <Route path='/note/:id/edit'
        render={(props) => <NoteForm {...props} type='Edit' notes={this.state.notes} updateValue={this.updateValue} updateNote={this.updateNote} />}
      />
      <Route exact path='/note/:id/delete'
        render={(props) => <DeleteModal {...props} notes={this.state.notes} deleteNote={this.deleteNote} />}
      />
      </main>
    </div>
    )}
}

export default App;
