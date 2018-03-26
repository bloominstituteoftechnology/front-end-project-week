import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import NoteList from './components/NoteList';
import {noteView} from './components/noteView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='col-3 left_side'>
              <h2 className='nav_head'>Lambda <br/>Notes</h2>
              <a href='/' className='nav_button'>View Your Notes</a>
              <a className='nav_button'>+Create New Notes</a>
            </div>

            <Route exact path='/' component = { NoteList } />
            <Route path='/noteview' component = { noteView} note={{title:'test', text:'asdkbasdukasbdaskuid'}} />
          </div>
        </div>

      </div>

    );
  }
}

export default App;
