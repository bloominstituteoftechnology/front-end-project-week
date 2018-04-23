//IMPORTS
import React, { Component } from 'react';
import './App.css';
import NoteList from './components/noteBody/NoteList.js';
import LeftBanner from './components/LeftBanner.js';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Route path='/'>
        <div className="App container-fluid">
          <div className='row d-flex flex-row'>
            <div className='col-2 d-flex flex-col banner'><LeftBanner /></div>
            <div className='col-10 d-flex flex-row justify-content-between contBody'><NoteList /></div>
          </div>
        </div>
      </Route>
    );
  }
}

export default App;
