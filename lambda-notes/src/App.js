import React, { Component } from 'react';

import './App.css';
import NoteList from './components/noteViews/NoteList';
import SideNav from './components/SideNav';
import NewNote from './components/noteViews/NewNote';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideNav className="nav-component"/>
      <NoteList className="list-component"/>
      {/* <NewNote/> */}
      </div>
    );
  }
}

export default App;
