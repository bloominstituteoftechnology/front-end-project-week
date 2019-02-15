import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import {
  Route,
  NavLink,
} from 'react-router-dom';

import NoteList from './components/NoteList'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className='side-bar'>
          <h1>Lambda Notes</h1>
          <NavLink className='side-barBTN' to='/'>
            View Your Notes
          </NavLink >
          <NavLink className='side-barBTN' to='/create'>
            + Create A Note
          </NavLink>
        </nav>
        <Route path='/' component={NoteList}/>
        {/* <Route path='/create' component={CreateNote} /> */}
      </div>
    );
  }
}

export default App;
