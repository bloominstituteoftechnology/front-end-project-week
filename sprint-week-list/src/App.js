import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import {Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import NotesContainer from './Components/NotesContainer';
import NewNoteForm from './Components/NewNoteForm';
import EditNoteForm from './Components/EditNoteForm';

class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: [],
      title: '',
      textBody: '',
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
            tags : response.data.tags,
            id : response.data._id,
            title: response.data.title,
            textBody : response.data.textBody,
          })
        })
        .catch(err =>{
          console.log('Trouble posting new data', err)
        })    
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path = '/' render = {(props) => <NotesContainer notes = {this.state.notes} />}/>
        <Route path = '/create' render = {(props) => <NewNoteForm notes = {this.state} createNewNote = {this.createNewNote}/>}/>
        <Route path = '/edit' render = {(props) => <EditNoteForm />}/>
      </div>
    );
  }
}

export default App;
