import React, { Component } from 'react';

import './App.css';

import NoteList from './components/noteViews/NoteList';
import SideNav from './components/SideNav';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideNav/>
      <NoteList/>
      </div>
    );
  }
}

export default App;
