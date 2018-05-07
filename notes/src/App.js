import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Nav/Nav.js";
import ListView from "./Components/ListView.js";






class App extends Component {
  render() {
    return <div className="AppContainer">
        <Nav />
        <ListView/>
      </div>;
  }
}



export default App;
