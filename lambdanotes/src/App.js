import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar"
import Notes from "./components/notes/Notes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <main>
          <h2>
            Your Notes:
          </h2>
          <div className="notes-container">
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
