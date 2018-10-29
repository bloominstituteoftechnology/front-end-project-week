import React, { Component } from 'react';

import { ListNotes } from './Views/ListNotes';
// import AddNote from './Views/AddNote';
// import ReadNote from './Views/ReadNote';

import Sidebar from './Components/Sidebar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <ListNotes />
      </div>
    );
  }
}

export default App;