import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

// Views
import NotesView from './views/NotesView';
import NoteView from './views/NoteView';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav>
            <Link to='/'>Home</Link>  
          </nav>

          <Fragment>
            <Route 
              exact
              path='/'
              component={NotesView}
            />

            <Route 
              exact
              path='/note/:noteId'
              component={NoteView}
            />
          </Fragment>
      </div>
    );
  }
}

export default App;
