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
        <header className="App-header">          
          <h1 className="App-title">Your Notes</h1>
        </header>                 
          <SideNav />
          {/* <ListView />                 */}
      </div>
    );
  }
}

export default App;

{/* <div>
        <div className="sideNav">
          <h1>Lambda Notes</h1>
          <Button className="button">View Your Notes</Button>
          <Button className="button">+ Create New Note</Button>
        </div> 
        <div className="main"> */}
