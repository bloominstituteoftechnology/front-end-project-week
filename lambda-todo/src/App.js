import React, { Component } from 'react';
import './App.css';
import Nav from './Home/Nav Links/Nav'; 
import NotesHolder from './Home/HomePage/NotesHolder'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="nav-bar">
      <Nav />
      </div>
      <div className="pages">
      <NotesHolder />
      </div>
      </div>
    );
  }
}

export default App;
