import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

// Views
import NotesView from './views/NotesView';
import NoteView from './views/NoteView';
import NoteFormView from './views/NoteFormView';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav>
            <Link to='/'>Home</Link>  
            <Link to='/note/new'>New Note</Link> 
          </nav>

          <Fragment>
            <Route 
              exact
              path='/'
              component={NotesView}
            />

            <Route 
              path='/note/:noteId'
              component={NoteView}
            />

            <Route 
              exact
              path='/note/new'
              component={NoteFormView}
            />
          </Fragment>
      </div>
    );
  }
}

export default App;
