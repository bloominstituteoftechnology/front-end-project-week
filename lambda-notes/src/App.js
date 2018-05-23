import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import MainSection from "./Components/MainSection";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Derrick's React Lambda Notes</h1>
        </header>
        <div className='Flex'>
          <div className='Sidebar'>
            <Sidebar/>
          </div>
          <div className='MainSection'>
            <MainSection/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
