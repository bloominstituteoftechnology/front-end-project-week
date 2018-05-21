import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListView from './components/ListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListView />
      </div>
    );
  }
}

export default App;
