import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import SideNavigation from './components/main/SideNavigation.js';
import MainBody from './components/main/MainBody.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>Note it</h1>
          </Link>
        </header>
        <div className="main-container">
          <div className="minor-container">
            <div className="side-navigation">
              <SideNavigation />
            </div>
            <div className="main-body">
              <MainBody />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;