import React, { Component } from 'react';
import './App.css';
import SideBar from './components/sidebar.js';
import AppMain from  './components/content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <AppMain />
      </div>
    );
  }
}

export default App;
