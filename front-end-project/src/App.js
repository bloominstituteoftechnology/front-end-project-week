import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftNav from './components/LeftNav/LeftNav';
import MainContent from './components/MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <div>
        Placeholder for App
        <LeftNav />
        <MainContent />
      </div>
    );
  }
}

export default App;
