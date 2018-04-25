import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import '../styles/App.css';
//import { dummyNotes } from '../notes';
import { NoteList } from './NoteList';
import { NoteView } from './NoteView';
import { NoteForm } from './NoteForm';
import { Modal } from './Modal';


export class App extends Component {
  constructor(props) {
    super(props);
    // Calls to local storage
    this.local = {
      get(target) { // Return parsed JSON
        return localStorage.getItem(target) ?
          JSON.parse(localStorage.getItem(target)) : undefined;
      },
      set(target, payload) { // Convert to string and store
        localStorage.setItem(target, JSON.stringify(payload));
      }
    }
    // Ease of use function
    this.getNotes = () => this.local.get('notes');
    // Use local storage as state upon page reload
    this.state = this.getNotes() ? 
    { notes: this.getNotes() } : { notes: [] };
  }

  createNote = note => { // Set local then update state
    this.local.set('notes', this.state.notes.concat(note));
    this.setState({ notes: this.local.get('notes') });
    console.log(this.local.get('notes'));
  }

  editNote = (newNote, id) => {
    // Copy local storage and edit specific note
    const local = this.getNotes();
    local[id] = newNote;
    // Apply changes to storage and state
    this.local.set('notes', local );
    this.setState({ notes: local });
  }

  deleteNote = id => {
    console.log(this.getNotes());
    const local = this.getNotes().forEach(note => console.log(note, id));
    console.log(local);
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
          <Link to="/delete/all" className="App_button App_button-red">Clear Notes</Link>
        </div>
        <div className="App_body">
          <Route exact path="/" render={() => 
            <NoteList notes={this.state.notes}/> 
          }/>
          <Route path="/view/:id" render={props => 
            <NoteView {...props} 
            notes={this.state.notes}/> 
          }/>
          <Route path="/create" render={props => 
            <NoteForm {...props} 
            formUse="Create New Note"
            notes={this.state.notes}
            useFunction={this.createNote}/> 
          }/>
          <Route path="/edit/:id" render={props => 
            <NoteForm {...props} formUse="Edit Note" 
            useFunction={this.editNote} 
            notes={this.state.notes}/> 
          }/>
          <Route path="/view/:id/delete" render={props => 
            <Modal {...props}
            useFunction={this.deleteNote}/> 
          }/>
          <Route path="/delete/all" render={props => (
            <div> {/* To Have notes show in the background without compromisng root path */}
              <NoteList notes={this.state.notes}/> 
              <Modal {...props}
              useFunction={this.clearNotes}/> 
            </div>
          )}/>
        </div>
      </div>
    );
  }
}
