import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import NoteList from './Components/NoteList';
import NewNote from './Components/NewNote';
import ViewNote from './Components/ViewNote';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Sidebar />
      <NoteList />
      <NewNote />
      <ViewNote />
      </div>
    );
  }
}

export default App;
