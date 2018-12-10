import React, { Component } from 'react';
import './App.css';

import SideBar from './Components/SideBar.js'
import MainContent from './Components/MainContent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <MainContent />
      </div>
    );
  }
}

export default App;
