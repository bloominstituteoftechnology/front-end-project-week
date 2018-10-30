import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NoteContainer from './NoteContainer'
import NavContainer from './NavContainer'
import CreateNote from './CreateNote/CreateNote'
import EditNote from './NoteView/NoteView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='navContainer'>
        <Route path='/' component={NavContainer} />
        </div>
        <div className='mainContent'>
        <Route exact path='/' component={NoteContainer} />
        <Route path='/create-note' component={CreateNote} />
        <Route path='/:id' component={EditNote} />
        </div>
      </div>
    );
  }
}

export default App;


