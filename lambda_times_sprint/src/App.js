import React, { Component } from 'react';
import './App.css';
import './components/NotesList.css';
import './components/NoteForm.css';
import './components/Note.css';

import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Auth0Lock } from 'auth0-lock';
import auth0 from 'auth0-js';

import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import Note from './components/Note';

var lock = new Auth0Lock(
  process.env.REACT_APP_CLIENT_ID,
  process.env.REACT_APP_DOMAIN_URL
);

class App extends Component {
  state = {
    tags: [],
    title: '',
    textBody: '',
};

componentDidMount() {
  this.fetchNotes();
}

// allows us to get all the notes data from the API
fetchNotes = ()=> {
  // axios.get('https://killer-notes.herokuapp.com/note/get/all')
  axios.get('http://localhost:9900/api/')
      .then(response => {
        // console.log(response);
        this.setState({ tags: response.data });
      })
      .catch(err => {
        console.log(err);
      });
}

// allows us to add title and textBody info for new note created on state
  handleInputChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    }

// allows us to create a new note and post it to the API
  handleAddNewNote = event => {
    console.log('firing')

    const note = {title: this.state.title, textBody: this.state.textBody};

    // axios.post('https://killer-notes.herokuapp.com/note/create', note)
    axios.post('http://localhost:9900/api/notes', note)
      .then(response => this.setState({ note: response.data,
                                        title: response.data.title,
                                        textBody: response.data.textBody
                                      }))
  }

  render() {
    // console.log("PROCESS: ", process.env);
    return (
      <div className="App">
        <header className="sidebar">
          <h1 className="App-title">Lambda Notes</h1>
          <div className="login"
            onClick={function() {
              lock.show();
            }}
            >Log In</div>
          <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              View Your Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/note-form" activeClassName="activeNavButton">
              +Create New Note
            </NavLink></li>
        </ul>
        </header>
        <div className="notes-section">
        <Route
          exact
          path="/"
          render={props => (
            <NotesList {...props} notesList={this.state.tags} />
          )}
        />
        <Route
          path="/note-form"
          render={props => (
          <NoteForm 
            {...props} 
            
            title={this.state.title}
            textBody={this.state.textBody}
            handleAddNewNote={this.handleAddNewNote}
            handleInputChange={this.handleInputChange} 
          /> 
          )}
        />
        <Route path="/notes/:id" render={props => 
          <Note 
            {...props}
            fetchNotes={this.fetchNotes}
          />
          } 
        />

        </div>

      </div>
    );
  }
}

export default withRouter(App);
