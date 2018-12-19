import React, { Component } from 'react';
import './App.css';
import Notes from "./components/Notes.js";
import Sideview from './components/Sideview.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Sideview />
        <Notes />
      </div>
    );
  }
}

export default App;