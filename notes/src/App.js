import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Notes  from './components/Notes';
import NoteForm from './components/NoteForm';
import NoteEdit from './components/NoteEdit';
import Note from './components/Note';

class App extends Component {
  state = {
    notes: [],
    note: {
      tags: [],
      title: "",
      body: "",
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:4200/notes/get/all')
    .then(response => this.setState({ notes: response.data, loading: false }))
    .catch(error => console.log('error'));
  }

  addNewNote = (e, addedNote) => {
    e.preventDefault();
    axios
      .post('http://localhost:4200/notes/create', addedNote)
      .then(response => {
        addedNote.id = response.data.success;
        this.setState({ notes: [addedNote, ...this.state.notes] })
      })
      .catch(error => console.log('error'));
  }

  editNote = (e, id, state) => {
    e.preventDefault();
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, state)
      .then(response => {
        const updateList = this.state.notes.map(note => {
          if (note._id === response.data._id) {
            return response.data;
          }
          return note;
        });
        this.setState({ notes: updateList });
      })
      .catch(error => console.log('error'));
  }

  render() {
    return (
      <div className="App">
          <div className="side-bar">
            <div className='lambda-notes'>
              <h1>Lambda</h1>
              <h1> Notes</h1>
            </div>
            <NavLink exact to='/'>
              <button className='side-button'>View Your Notes</button>
            </NavLink>
            <NavLink to='/create-new-note'>
              <button className='side-button'>+ Create New Note</button>
            </NavLink>
          </div>
          <Route
            path exact='/'
            render={props =>
              <Notes {...props} />
            } />
          <Route
            path='/create-new-note'
            render={props =>
              <NoteForm {...props} addNote={this.addNewNote} />} />
          <Route
            path='/note/:id'
            render={props =>
              <Note
                {...props}
              />
            }
          />
          <Route
            path='/edit/:id'
            render={props =>
              <NoteEdit {...props}
                editNote={this.editNote}
              />
            } />
        </div>
    );
  }
}

export default App;
