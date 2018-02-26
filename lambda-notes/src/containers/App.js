import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
    );
  }
}

export default App;
