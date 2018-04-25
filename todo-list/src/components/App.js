import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import '../styles/App.css';
import { dummyNotes } from '../notes';
import { NoteList } from './NoteList';
import { NoteView } from './NoteView';
import { NoteForm } from './NoteForm';
import { Modal } from './Modal';


export class App extends Component {
  local = {
    get(target) {
      return localStorage.getItem(target) ?
        JSON.parse(localStorage.getItem(target)) : undefined;
    },
    set(target, payload) {
      localStorage.setItem(target, JSON.stringify(payload));
    }
  }

  state = { notes: [] }
  
  createNote = note => { // Take in note title and body as object
    // Add note to state and update local storage
    const newNote = {id: this.state.notes.length, ...note}
    this.setState({ notes: this.state.notes.concat(note) });
    this.local.set('notes', this.state);
  }

  editNote = (note, id) => {

  }

  deleteNote = id => {

  }

  clearNotes = () => {
    localStorage.clear();
    this.setState({ notes: [] });
    console.log('Local storage has been cleared');
  }

  render() {
    return (
      <div className="App">
        <div className="App_sideBar">
          <h3>Lambda<br/>Notes</h3>
          <Link to="/" className="App_button">View Your Notes</Link>
          <Link to="/create" className="App_button">+Create New Note</Link>
          <button onClick={this.clearNotes}>Clear Notes</button>
        </div>
        <div className="App_body">
          <Route exact path="/" render={() => 
            <NoteList notes={this.state.notes}/> 
          }/>
          <Route path="/view/:id" render={props => 
            <NoteView {...props} notes={this.state.notes}/> 
          }/>
          <Route path="/create" render={props => 
            <NoteForm {...props} formUse="Create New Note" useFunction={this.createNote}/> 
          }/>
          <Route path="/edit/:id" render={props => 
            <NoteForm {...props} formUse="Edit Note" useFunction={this.editNote}/> 
          }/>
          <Route path="/view/:id/delete" render={props => 
            <Modal {...props} deleteNote={this.deleteNote}/> 
          }/>
        </div>
      </div>
    );
  }
}
