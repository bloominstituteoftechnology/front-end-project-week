import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftNav from './Components/LeftNav/LeftNav';
import MainContent from './Components/MainContent/MainContent';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <LeftNav/>
        <MainContent/>
      </div>
    );
  }
}

export default App;
