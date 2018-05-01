import React, { Component } from 'react';

import Sidebar from './Components/Sidebar';
import NoteContainer from './Components/NoteContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <NoteContainer />
      </div>
    );
  }
}

export default App;
