import React, { Component } from 'react';

import './css/App.css';
import './css/NavBar.css';

import axios from 'axios';
import {Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import NotesContainer from './Components/NotesContainer';
import NewNoteForm from './Components/NewNoteForm';
import EditNoteForm from './Components/EditNoteForm';
import Note from './Components/Note';
import ExpandedNote from './Components/ExpandedNote';

class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: [],
     
    }
  }
  fetchNotes = (event) =>{
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response =>{
          this.setState(()=> ({notes : response.data}))
        })
      .catch(err =>{
        console.log('Trouble loading data', err)
      })  
  }
  componentDidMount(){
    this.fetchNotes()
  }

  createNewNote = (newNote) =>{
    axios
      .post('https://fe-notes.herokuapp.com/note/create', newNote)
        .then(response =>{
          this.fetchNotes()
        })
      .catch(err =>{
          console.log('Trouble posting new data', err)
        })    
  }
  deleteNote = (id) =>{
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(response =>{
          this.fetchNotes()
        })
        .catch(err =>{
          console.log('Trouble deleting note' ,err)
        })
  }
  updateNote = (id, updatedNote) =>{
    axios 
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, updatedNote)
        .then(response =>{
          this.fetchNotes()
        })
      .catch(err =>{
        console.log('Trouble updating note', err)
      })  
  }
  noteCutOff = (notes) =>{
    return (notes.length > 12 ? notes.slice(0, 12) : notes)
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path = '/' render = {(props) => <NotesContainer {...props} notes = {this.noteCutOff(this.state.notes)} />}/>
        
        <Route path = '/notes/:id' render = {(props) => <ExpandedNote {...props} notes = {this.state.notes} deleteNote = {this.deleteNote}/>}/>
        <Route path = '/create' render = {(props) => <NewNoteForm {...props} notes = {this.state.notes} createNewNote = {this.createNewNote}/>}/>
        <Route path = '/notes/edit/:id' render = {(props) => <EditNoteForm {...props} updateNote = {this.updateNote}/>}/>
      </div>
    );
  }
}

export default App;
