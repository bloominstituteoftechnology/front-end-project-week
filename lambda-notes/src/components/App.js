import React, { Component } from 'react';
import './App.css';
import SideBarContainer from './SideBarContainer/SideBarContainer';
import NotesContainer from './NotesContainer/NotesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <SideBarContainer />
        <NotesContainer />
        
      </div>
    );
  }
}

export default App;
