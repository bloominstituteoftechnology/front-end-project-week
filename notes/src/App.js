import React, { Component, Fragment } from 'react';

import {
  NavLink,
  Route
} from 'react-router-dom';

// Views
import NotesView from './views/NotesView';


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
        </div>
      </>
    );
  }
}

export default App;
