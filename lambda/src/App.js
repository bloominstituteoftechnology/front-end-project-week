import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import SideBar from './components/sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideBar/>
      </div>
    );
  }
}

export default App;
