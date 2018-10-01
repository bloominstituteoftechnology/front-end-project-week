import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LambdaNav from './components/LambdaNav.js';
import HomePage from './components/Homepage/HomePage.js';

class App extends Component {





  render() {
    return (
      <div className="App">
        <LambdaNav />
        <HomePage />
      </div>
    );
  }
}

export default App;
