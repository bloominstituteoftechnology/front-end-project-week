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

class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: [],
     
    }
  }
  componentDidMount(){
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response =>{
          this.setState(()=> ({notes : response.data}))
        })
      .catch(err =>{
        console.log('Trouble loading data', err)
      })  
  }
  createNewNote = (newNote) =>{
    axios
      .post('https://fe-notes.herokuapp.com/note/create', newNote)
        .then(response =>{
          this.setState({
            notes: response.data
          })
          
        })
        
        .catch(err =>{
          console.log('Trouble posting new data', err)
        })    
  }
  deleteNote = (id) =>{
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(response =>{

        })
        .catch(err =>{
          console.log('Trouble deleting note' ,err)
        })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path = '/' render = {(props) => <NotesContainer {...props} notes = {this.state.notes} />}/>
        <Route path = 'notes/:id' render = {(props) => <Note {...props} />}/>
        <Route path = '/create' render = {(props) => <NewNoteForm {...props} notes = {this.state.notes} createNewNote = {this.createNewNote}/>}/>
        <Route path = '/edit' render = {(props) => <EditNoteForm {...props} />}/>
      </div>
    );
  }
}

export default App;
