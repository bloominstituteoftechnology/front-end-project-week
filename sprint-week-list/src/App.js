import React, { Component } from 'react';

import './css/App.css';
import './css/NavBar.css';

import axios from 'axios';
import {Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import NotesContainer from './Components/NotesContainer';
import NewNoteForm from './Components/NewNoteForm';
import EditNoteForm from './Components/EditNoteForm';

import ExpandedNote from './Components/ExpandedNote';
import Authenticate from './Components/Authenticate';

class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: [],
      search : '',
     
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
  updateNote = (updatedNote) =>{
    
    const index = this.state.notes.findIndex(note => note._id === updatedNote.id);
    axios   
      .put(`https://fe-notes.herokuapp.com/note/edit/${updatedNote.id}`, updatedNote)
        .then(response =>{
          console.log('I am response',response)
            this.fetchNotes()
        })
    .catch(err =>{
        console.log('Trouble adding new note', err)
    })    
  }
  searchNotes = (searchValue) => {
    const search = searchValue
    const data = this.state.notes.filter((note) => {
      return (note.title.includes(search) || note.textBody.includes(search))
    })
    search === '' ? this.componentDidMount() : this.setState({notes : data})
  }

  render() {
    //const App = () => {
      return ( 
        <div className="App">
          <NavBar />
          <Route exact path = '/' render = {(props) => <NotesContainer {...props} notes = {this.state.notes} searchNotes = {this.searchNotes}/>}/>
          <Route exact path = '/notes/:id' render = {(props) => <ExpandedNote {...props} notes = {this.state.notes} deleteNote = {this.deleteNote}/>}/>
          <Route exact path = '/create' render = {(props) => <NewNoteForm {...props} notes = {this.state.notes} createNewNote = {this.createNewNote}/>}/>
          <Route exact path = '/edit/:id' render = {(props) => <EditNoteForm {...props} notes = {this.state.notes} updateNote = {this.updateNote}/>}/>
        </div>
      );
    //}
    // const HOC = Authenticate(App);
    //   return(
    //     <HOC />
    // )
  }
}

export default Authenticate(App);
