import React, { Component } from 'react';

import './App.css';
import SideBar from './components/SideBar.js';
import ListView from './components/ListView.js';

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="main-content-container">          
          <div className="side-menu">
            <SideBar />
          </div>
          <div className="list-view">      
            <h1 className="app-intro">
              Your Notes:
            </h1>
            <ListView />
          </div>    
        </div>
      </div>
    );
  }
}

export default App;