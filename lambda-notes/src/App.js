import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <MainContent />
      </div>
    );
  }
}

export default App;
