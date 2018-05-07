import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Nav/Nav.js";
import ListView from "./Components/ListView.js";
// import { NavLink, Switch, Route } from "react-router-dom";





class App extends Component {
  render() {
    return <div className="App">
        <Nav />
        <ListView/>
      </div>;
  }
}



export default App;
