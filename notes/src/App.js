import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import NewNoteForm from './components/NewNoteForm';
import NotesList from './components/NotesList'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
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
    note: {
    id: null,
    tags: [],
    title: '',
    textBody: '',
    }
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
    textBody: ''});
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
            path = "/all"
            render = {props => {
              return(
                <NotesList
                notes = {this.state.notes}
                />
              )
            }}
            />

            <Route
            path = "/new"
            render = {
              props => 
              <NewNoteForm 
              addNote = {this.props.handleAddNote}
            />
            } 
            />

        </div>  
        </div>
        )
    }
  }

export default App;