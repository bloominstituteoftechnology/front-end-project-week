import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import NotesList from './components/NotesList';
import Note from './components/Note';
import CreateNewNote from './components/CreateNewNote';

import { AppWrapper } from './style'
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [],
      filteredSearch: []
    }
  }

  componentDidMount () {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => {
        console.log(res)
        this.setState({
        notes: res.data
      })})
      .catch(err => console.log(err))
  }

  createNote  = (data) => {
    axios.post('https://fe-notes.herokuapp.com/note/create/', data)
    .then(res => {
      if(res.data.success) {
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
        .then(res => {this.setState({
          notes: res.data
        })})
      }
    })
      .catch(err=> console.log(err))
      
  }

  editNote = ( data, id) => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, data)
    .then(res => {
       {
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
        .then(res => {this.setState({
          notes: res.data
        })})
      }
    })
    .catch(err => console.log(err))
  }

  deleteNote = id => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)

    .then(res => {
      if(res.data.success) {
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
        .then(res => {this.setState({
          notes: res.data
        })})
      }
    })
    .catch(err => console.log(err))
   
  }

  handleSearchInput = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  getFilteredSearch = () => {
    const searchFiltered =  this.state.notes.filter(note => {
      if(note.title.includes(this.state.filteredSearch.toUpperCase())) {
          return true
        }
        return false
    }) 
   return searchFiltered
}

  render() {
    const { notes } = this.state;
    return (
      <AppWrapper>
        <NavBar />
        <SearchBar
          filteredSearch={this.state.filteredSearch}
          handleSearchInput={this.handleSearchInput}
        />
        <Route 
          exact path ='/'
          render={props =>
            <NotesList
              {...props}
              notes={this.state.filteredSearch.length > 0 ?
                this.getFilteredSearch() :
                notes}
            />
          }
        />

        <Route
          exact path ='/note/:id'
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
          exact path='/edit-note/:id'
          render={props => 
            <CreateNewNote
              {...props}
              note={notes.map(note => note)}
              editNote={this.editNote}
              edit
            />
          }
        />
      </AppWrapper>
    );
  }
}

export default App;
