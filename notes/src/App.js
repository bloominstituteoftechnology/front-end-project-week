import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import NotesListView from './views/NotesListView';
import NotesFormView from './views/NotesFormView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className='nav'>
          <h1>Lambda Notes</h1>
          <li>
            <NavLink exact to='/notes'>
              View Your Notes
            </NavLink>
          </li>
          <li>
            <NavLink to='/notes-form'>
                + Create New Note
            </NavLink>
          </li>
        </ul>
        <Route exact path='/notes' component={NotesListView} />
        <Route path= '/notes-form' component={NotesFormView} />
      </div>
    );
  }
}

export default withRouter(App);
