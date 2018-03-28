import React, { Component } from 'react';

import './App.css';
import NoteView from './components/Notedisplay';
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className= 'App'>
        <Sidebar/>
        <NoteView/>
      </div>
    );
  }
}

export default App;
