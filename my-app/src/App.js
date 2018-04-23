import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className= 'App-notes'> 
          <h1> Lambda Notes </h1>
          <p className = 'App-buttons'> View Your Notes </p> 
          <p className = 'App-buttons'> +Create New Notes </p> 
        </div>
      </div>
    );
  }
}

export default App;
