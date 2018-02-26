import React, { Component } from 'react';

import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <MainContent />
      </div>
    );
  }
}

export default App;
