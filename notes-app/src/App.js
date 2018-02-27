import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Home__Left">
          <div className="Home__Left__Text">
            <b>Lambda</b>
            <br/>
            <b>Notes</b>
          </div>
          <div className="button Home__NoteButton">
            <b>View Your Notes</b>
          </div>
          <div className="button Home__NoteButton">
            <b>+ Create New Note</b>
          </div>
        </div>
        <div className="Home__Right">
        Right
        </div>
      </div>
    );
  }
}

export default App;
