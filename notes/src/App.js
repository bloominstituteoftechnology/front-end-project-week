import React, { Component } from 'react';
import axios from "axios";
import NoteList from "./components/NoteList";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        I am the App
        <NoteList />
      </div>
    );
  }
}

export default App;
