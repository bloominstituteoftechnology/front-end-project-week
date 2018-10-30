import React, { Component } from 'react';
import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Sidebar />
       <NoteList />
      </div>
    );
  }
}

export default App;
