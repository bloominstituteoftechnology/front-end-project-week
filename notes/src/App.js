import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  NoteCard  from './components/NoteCard';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NoteCard/>
        <NoteCard/> */}
      </div>
    );
  }
}

export default App;
