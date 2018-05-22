import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListView from './components/ListView.js';
import { Button } from 'reactstrap'; 
import SideNav from './components/SideNav';

class App extends Component {
  render() {
    return (
      <div className="App">      
          <SideNav />       
      </div>
    );
  }
}

export default App;
