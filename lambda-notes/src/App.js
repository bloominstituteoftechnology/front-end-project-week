import React, { Component } from 'react';

import './App.css';
import SideBar from './components/SideBar.js';
import MainBody from './components/MainBody.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SideBar />
        <MainBody />
      </div>
    );
  }
}

export default App;