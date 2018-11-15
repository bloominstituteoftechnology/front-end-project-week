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
      stateObject : {

      }
    }
  }
  componentDidMount(){
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response =>{
          
          this.setState({
           stateObject : response.data
          })
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
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path = '/' render = {(props) => <NotesContainer notes = {this.state} />}/>
        <Route path = '/create' render = {(props) => <NewNoteForm notes = {this.state} createNewNote = {this.createNewNote}/>}/>
        <Route path = '/edit' render = {(props) => <EditNoteForm />}/>
      </div>
    );
  }
}

export default App;
