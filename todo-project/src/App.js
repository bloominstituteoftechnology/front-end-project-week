import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NoteContainer from './NoteContainer'
import NavContainer from './NavContainer'
import CreateNote from './CreateNote/CreateNote'
import ViewNote from './NoteView/NoteView'
import EditNote from './EditNote/EditNote'
import Authentication from './Authentication/Authenticate'
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
            <Route exact path='/:id' component={ViewNote} />
            <Route path='/:id/edit-note' component={EditNote} />
            </div>
          </div>
    );
  }
}

export default Authentication(App);


