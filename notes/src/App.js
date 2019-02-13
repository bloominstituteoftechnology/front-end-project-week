import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import ListView from './components/ListView/ListView'
import Sidebar from './components/Sidebar/Sidebar'
import CreateForm from './components/CreateForm/CreateForm'
import NoteView from './components/ListView/NoteView'
import EditForm from './components/EditForm/EditForm'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

    componentDidMount() {
      this.getNotes();
    }

    getNotes = () => {
      axios.get('https://notesbackend.herokuapp.com/api/notes')
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(err => console.log('error getting notes', err))
    }

    createNote = (title, text) => {
      axios.post('https://notesbackend.herokuapp.com/api/notes', {
        title: title,
        content: text
      })
      .then(response => {
        this.getNotes();
      })
      .catch(err => console.log('error creating note', err)) 
    }

    deleteNote = (id) => {
      axios.delete(`https://notesbackend.herokuapp.com/api/notes/${id}`)
      .then(response => {
        this.getNotes();
      })
      .catch(err => console.log('error deleting note', err))
    }

    editNote = (id, title, text) => {
      axios.put(`https://notesbackend.herokuapp.com/api/notes/${id}`, {
        title: title,
        content: text
      })
      .then(response => {
        this.getNotes();
      })
      .catch(err => console.log('Error editing note', err))
    }

 
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" render={(props) =>
          <ListView notes={this.state.notes} />
        } />
        
        <Route exact path='/create' render={(props) => <CreateForm {...props} createNote={this.createNote} />} />
       
        <Route exact path='/note/:id' render={(props) => 
          <NoteView 
            {...props} 
            notes={this.state.notes} 
            deleteNote={this.deleteNote}
            />} />
          
          <Route exact path="/note/edit/:id" render={(props) =>
            <EditForm
              {...props}
              editNote={this.editNote}
              notes={this.state.notes}
            />}/>
      </div>
    );
  }
}

export default App;
