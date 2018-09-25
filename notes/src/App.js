import React, { Component } from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';

import NoteListView from './views/NoteListView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div>
          <h1>Lambda Notes</h1>
          
          <div>
            <NavLink exact to='/'>View Your Notes</NavLink>
          </div>

          <div>
            <NavLink exact to='/'>+ Create New Note</NavLink>
          </div>
        </div>

        <h3>Your Notes:</h3>
      <Route exact path='/' component = {NoteListView} />
      </div>
    )
  }
}

export default withRouter(App); 