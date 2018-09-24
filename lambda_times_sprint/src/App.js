import React, { Component } from 'react';
import './App.css';

import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import NotesList from './components/NotesList';

class App extends Component {
  state = {
    notes: [],
    title: '',
    textBody: ''
  }

  componentDidMount() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
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
        </ul>
        </header>
        <div className="notes-section">
        <h2>Your Notes:</h2>
        <Route
          exact
          path="/"
          render={props => (
            <NotesList {...props} notesList={this.state.notes} />
          )}
        />

        </div>

      </div>
    );
  }
}

export default App;
