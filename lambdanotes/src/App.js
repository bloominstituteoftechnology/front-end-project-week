import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftNav from './Components/LeftNav/LeftNav';
import MainContent from './Components/MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftNav />
        <MainContent />
      </div>
    );
  }
}

export default App;
