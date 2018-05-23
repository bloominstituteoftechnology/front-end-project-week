import React, { Component } from 'react';

import './App.css';
import SideBar from './components/SideBar.js';
import MainContent from './components/MainContent.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="page-container">
          <div className="main-content-container">
            <div className="side-bar">
              <SideBar />
            </div>
            <div className="main-content">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;