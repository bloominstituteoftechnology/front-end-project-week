import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <Navbar classes="col-md-4" />
          <div className="col-md-8">
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/* Code I might want to keep around
  <img src={logo} className="App-logo" alt="logo" />
*/