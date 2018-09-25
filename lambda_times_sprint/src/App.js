import React, { Component } from 'react';
import './App.css';

import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import Note from './components/Note';

class App extends Component {
  state = {
    tags: [],
    title: '',
    textBody: '',
};

componentDidMount() {
  this.fetchNotes();
}

fetchNotes = ()=> {
  axios.get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ tags: response.data });
      })
      .catch(err => {
        console.log(err);
      });
}

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    }

  handleAddNewNote = event => {
    // event.preventDefault();
    console.log('firing')

    const note = {title: this.state.title, textBody: this.state.textBody};

    axios.post('https://killer-notes.herokuapp.com/note/create', note)
      .then(response => this.setState({ note: response.data,
                                        title: response.data.title,
                                        textBody: response.data.textBody
                                      }))
  }

  render() {
    return (
      <div className="App">
        <header className="sidebar">
          <h1 className="App-title">Lambda Notes</h1>
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
            note={this.state.tags} 
            handleAddNewNote={this.handleAddNewNote}
            handleChange={this.handleChange}    
          /> 
          )}
        />
        <Route path="/tags/:id" render={props => 
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
