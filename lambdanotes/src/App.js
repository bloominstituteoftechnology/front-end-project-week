import React, { Component } from 'react';
import './index.css';
import Notes from "./components/Notes.js";
import Sideview from './components/SideView.js';



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