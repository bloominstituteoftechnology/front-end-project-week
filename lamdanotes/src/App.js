import React, { Component } from 'react';


import SidebarView from './sidebarComponent';
import NotesView from './NotesComponent';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SidebarView />
          <NotesView />
      </div>
    );
  }
}

export default App;
