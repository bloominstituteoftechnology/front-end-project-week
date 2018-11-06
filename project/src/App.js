import React, { Component } from 'react';
import './App.css';
import Notebar from './components/notebar';
import Note from './components/note';

class App extends Component {
  render() {
    return (
      <div>
        <Notebar />
        <Note />
      </div>
    );
  }
}

export default App;
