import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'

import NavBar from './components/NavBar';
import NotesList from './components/NotesList';
import Note from './components/Note';
import CreateNewNote from './components/CreateNewNote';

import { AppWrapper } from './style'
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount () {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => this.setState({
        notes: res.data
      }))
      .catch(err => console.log(err))
  }

  createNote  = (data) => {
    axios.post('https://fe-notes.herokuapp.com/note/create/', data)
      .then(res =>{
        console.log(res)
        this.setState({
          notes: res.data
        })
      })
      .catch(err=> console.log(err))
  }

  editNote = ( data, id) => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, data)
    .then(res => {
        this.setState({
            notes: res.data
        })
    })
    .catch(err => console.log(err))
  }

  deleteNote = id => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(res => {
      this.setState({
        notes: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    const { notes } = this.state;
    return (
      <AppWrapper>
        <NavBar />
        <Route 
          exact path ='/'
          render={props =>
            <NotesList
              {...props}
              notes={notes}
            />
          }
        />

        <Route
          exact path ='/note/:_id'
          render={props =>
            <Note
              {...props}
              notes={notes}
              delete={this.deleteNote}
            />
          }
        />

        <Route
          exact path='/create-note'
          render={props => 
            <CreateNewNote
              {...props}
              createNote={this.createNote}
            />
          }
        />

        <Route
          exact path='/edit-note/:_id'
          render={props => 
            <CreateNewNote
              {...props}
              editNote={this.createNote}
              edit
            />
          }
        />
      </AppWrapper>
    );
  }
}

export default App;
