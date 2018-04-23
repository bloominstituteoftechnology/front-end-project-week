import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div class="leftbox">
          <h3>Lambda Notes</h3>
          <button class ="Buttons">View Your Notes</button>
          <button class ="Buttons">+ Create New Note</button>
        </div>
        <div class ="rightbox">
          This is some right stuff i need to put in.
        </div>
      </div>
    );
  }
}

export default App;
