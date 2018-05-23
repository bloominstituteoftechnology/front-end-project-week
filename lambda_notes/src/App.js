import React, { Component } from 'react';
import Notesidebar from './container/Notesidebar.js';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Notesidebar addData={this.addToNoteList}/>
      </div>
    );
  }
}

export default App;
