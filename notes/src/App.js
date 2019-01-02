import React, { Component, Fragment } from 'react';

import {
  NavLink,
  Route
} from 'react-router-dom';

// Views
import NoteFormView from './views/NoteFormView';
import NotesView from './views/NotesView';
import NoteView from './views/NoteView';


import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/create-note'>Add Note</NavLink>
        </nav>

        <div className='app-container'>
          
          <Route
            path='/create-note'
            component={
              NoteFormView
            }
          />

          <Route
            exact
            path='/'
            component={
              NotesView
            }
          />

          <Route
            exact
            path = '/note/:noteId'
            component = {
              NoteView
            }
          />

          <Route
            update
            path='/note/:noteId/update'
            render={props => <NoteFormView {...props} update/>}
          />
        </div>
      </>
    );
  }
}

export default App;
