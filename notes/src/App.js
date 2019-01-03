// *** === Imports === *** //
// React
import React, {
  Component,
  Fragment
} from 'react';

// React Router
import {
  NavLink,
  Route
} from 'react-router-dom';

// Views
import NoteFormView from './views/NoteFormView';
import NotesView from './views/NotesView';
import NoteView from './views/NoteView';

// Styles
import './App.css';


// *** === Class Component === *** //
class App extends Component {

  // ** == Render to DOM
  render() {
    return (
      <>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/create-note'>Add Note</NavLink>
        </nav>

        <div className='app-container'>
          {/* C - Create */}
          <Route
            exact
            path='/create-note'
            component={
              NoteFormView
            }
          />

          {/* Ra - Read All */}
          <Route
            exact
            path='/'
            component={
              NotesView
            }
          />

          {/* R1 - Read One  */}
          <Route
            exact
            path = '/note/:noteId'
            component = {
              NoteView
            }
          />

          {/* U - Update */}
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
