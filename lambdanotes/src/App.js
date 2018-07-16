import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar"
import Notes from "./components/notes/Notes";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="sidebar-container">
          <Sidebar />
          <Notes />
        </div>
      </div>
    );
  }
}

export default App;
