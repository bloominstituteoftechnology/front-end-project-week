import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar.js'; 
import Notes from './Notes.js'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div> 
        <div className="notes-container">
          <Notes /> 
        </div> 
      </div>
    );
  }
}

export default App;
