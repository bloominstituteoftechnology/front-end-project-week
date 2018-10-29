import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NoteContainer from './NoteContainer'
import NavContainer from './NavContainer'
import CreateNote from './CreateNote/CreateNote'
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
        </div>
      </div>
    );
  }
}

export default App;


{/* <div className='navContainer'>
        <NavContainer />
        </div>
        <div className='mainContent'>
        
        <NoteContainer />
        </div>  */}