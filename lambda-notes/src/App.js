import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import SideNav from './components/SideNav.js';
import MainContent from './components/MainContent.js';

class App extends Component {
  render() {
    return (
      <div className="App">                
        <SideNav />
        <MainContent />
      </div>
    );
  }
}

export default App;