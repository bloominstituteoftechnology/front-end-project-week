import React, { Component } from 'react';
import SideBarNav from './Nav/SideBarNav';
import NotesPage from './notes/NotesPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBarNav />
        <NotesPage />
      </div>
    );
  }
}

export default App;
