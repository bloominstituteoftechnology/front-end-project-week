import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListView from './components/ListView';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
        <ListView />
      </div>
    );
  }
}

export default App;
