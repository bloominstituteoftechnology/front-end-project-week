import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from  "./components/layout/Navbar"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      </div>
    );
  }
}

export default App;
