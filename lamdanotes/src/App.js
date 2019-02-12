import React, { Component } from 'react';


import SidebarView from './sidebarComponent/sbView';
import NotesView from './NotesComponent/notesView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <SidebarView />
          <NotesView />
      </div>
    );
  }
}

export default App;
