import React, { Component } from 'react';
import './App.css';
import Note from './Components/note';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Note />
      </div>
    );
  }
}

export default App;
