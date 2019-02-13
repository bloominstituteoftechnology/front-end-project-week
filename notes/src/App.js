import React, { Component } from 'react';
import './App.css';
import SideView from './components/SideView.js'
import Notes from './components/Notes.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <SideView />          
        <Notes />

      </div>
    );
  }
}

export default App;
