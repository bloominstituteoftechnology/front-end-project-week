import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import NewNoteForm from './components/NewNoteForm';
import NotesList from './components/NotesList';
import NotesView from './components/NotesView';
import './App.css';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      notes: [
        {
            id: 1,
            tags: [],
            title: 'Note Title',
            textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    
        },
        {
            id: 2,
            tags: [],
            title: 'Note Title',
            textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    
        },
        {
            id: 3,
            tags: [],
            title: 'Note Title',
            textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    
        },
        {
            id: 4,
            tags: [],
            title: 'Note Title',
            textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    
        },    
    ],
    title: '',
    textBody: '',
    selected: {}
 }
}


handleChange = event => {
  this.setState({ [event.target.name]: event.target.value})
}


handleAddNote = event => {
  event.preventDefault();
  const notes = this.state.notes.slice();
  notes.push({title: this.state.title, 
    textBody: this.state.textBody, 
    id: Date.now() });
  this.setState({
    notes, 
    title: '', 
    textBody: ''
  });
}

handleSelectNote = id => {
  this.setState({selected: this.state.notes[`${id}`]});
}

  render() {
    console.log('logging state in App',this.state);
    return (
      <div>
        <Route path = "/" component={NavBar} />
        <Route exact path = "/" render={props =>
        (<NotesList {...props}
        notes={this.state.notes} 
        />
      )}
        />
        <Route path = "/form" render={props =>
        (<NewNoteForm {...props}
          title={this.state.title}
          textBody = {this.state.textBody}
          handleAddNote = {this.handleAddNote}
          handleChange = {this.handleChange}
          />
        )}
          />
          <Route path="/notes/:id" render={props =>
          <NotesView {...props}
          note={this.state.notes}
          />
        }
          />
      </div>
        )
    }
  }

export default App;