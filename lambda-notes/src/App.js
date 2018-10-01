import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LambdaNav from './components/LambdaNav.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <LambdaNav/>
      </div>
    );
  }
}

export default App;
