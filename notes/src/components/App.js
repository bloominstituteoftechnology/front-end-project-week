import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../styles/App.css';
import { NoteList } from './NoteList';
import { NoteView } from './NoteView';
import { NoteForm } from './NoteForm';
import { Modal } from './Modal';
import { ErrorPage } from './ErrorPage';


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

  syncLocalState = payload => {
    this.local.set('notes', payload );
    this.setState({ notes: payload });
  }

  createNote = note => { // Set local then update state
    this.local.set('notes', this.state.notes.concat(note));
    this.setState({ notes: this.local.get('notes') });
  }

  editNote = (newNote, id) => {
    // Copy local storage and edit specific note
    const local = this.getNotes();
    local[id] = newNote;
    // Apply changes to storage and state
    this.syncLocalState(local);
  }

  deleteNote = id => {
    // Make new state without target note
    const local = this.getNotes().filter(note => note.id !== id);
    // Adjust id's of notes that still remain
    for (let note in local) local[note].id = Number(note);
    this.syncLocalState(local);
  }

  clearNotes = () => {
    localStorage.clear();
    this.setState({ notes: [] });
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
          <Switch>
            <Route exact path="/" render={() => <NoteList notes={this.state.notes}/> }/>
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
              <div> {/* Make sure that modal is shown above note list */}
                <NoteList notes={this.state.notes}/> 
                <Modal {...props}
                useFunction={this.clearNotes}/> 
              </div>
            )}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}
