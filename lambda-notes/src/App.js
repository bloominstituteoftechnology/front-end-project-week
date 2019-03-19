import React, { Component } from 'react';
import NotesPage from './components/NotesPage';
import Authenticate from './Authenticate/Authenticate';

import './App.css';
import './index.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      
    }
  }

  render () {
    return (
      <div id='app' className='note-page'>
      <NotesPage />
      </div>
    );
  }
}

export default Authenticate(App)
