import React, { Component, Fragment } from 'react';

import {
  NavLink,
  Route
} from 'react-router-dom';

// Views
import NotesView from './views/NotesView';
import NoteView from './views/NoteView';


import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink to='/'>Home</NavLink>
        </nav>

        <div className='app-container'>
          <Route
            exact
            path='/'
            component={NotesView}
          />

          < Route
          exact
          path = '/note/:noteId'
          component = {
            NoteView
          }
          />
        </div>
      </>
    );
  }
}

export default App;
