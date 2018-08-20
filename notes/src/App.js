import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NewNoteForm from './components/NewNoteForm';
import NotesList from './components/NotesList'
import './App.css';

//initial state set up:
// {
//   "tags": ["tag", "otherTag"],
//   "title": "Note Title",
//   "textBody": "Note Body",
// }


class App extends Component {

  constructor() {
    super();
    this.state = {
  }
}

  render() {
    console.log('logging state in App',this.state);
    return (
      <div className = "app">
        <div className = "nav-bar">
            <h1 className = "nav-bar-header">
                Lambda Notes
            </h1>
            <Link to ="/all">
            <button className = "nav-button"> 
                View Your Notes
            </button>
            </Link>
            <Link to="/new">
            <button className = "nav-button">
                + Create New Note
            </button>
            </Link>
        </div> 
        <div className = "notes-container">
            <Route
            exact path = "/all"
            component = {NotesList}     
            />
            <Route
            exact path = "/new"
            component = {NewNoteForm}
            />
        </div>  
        </div>
        )
    }
  }

export default App;