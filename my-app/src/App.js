import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Lambda Notes </h1>
        <button> View Your Notes </button> 
        <button> +Create New Note </button>
        <h3> Your Notes </h3>
        <div className='Notes'> 
        <p>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ... </p>
        </div> 
      </div>
    );
  }
}

export default App;
