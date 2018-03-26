import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="container">
      <div className="row App">
        <div className="col-3 indexCol">
          <h1> Lambda Notes </h1>
        </div>
        <div className="col-9 noteCardCol">
          <h3> Place note cards here </h3>
        </div>
      </div>
    </div>  
    );
  }
}

export default App;
