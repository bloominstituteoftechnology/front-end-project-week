import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  NoteCard  from './components/NoteCard';
import Sidebar from './components/Sidebar';
import NoteContainer from './components/NoteContainer';
import dummyData from './dummydata';

class App extends Component {
  



  render() {
    return (
      <div className="App">
        <div className="Container">

          <Sidebar/>
          <NoteContainer/>
          
        </div>
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
