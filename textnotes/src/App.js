import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import NotesContainer from './Components/NotesContainer';
import SideBar from './Components/SideBar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SideBar />
      </div>
    );
  }
}

export default App;
