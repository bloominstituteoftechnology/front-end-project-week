import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListView from './components/ListView.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Lambda Notes</h1>
        </header>
        <h1 className="App-intro">
          Your Notes:
        </h1>
        <ListView />
        
      </div>
    );
  }
}

export default App;
