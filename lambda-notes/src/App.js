import React, { Component } from 'react';
import SideBar from './components/SideBar';
import MainPane from './components/MainPane';
import dummydata from './dummydata.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SideBar />
        <MainPane />
      </div>
    );
  }
}

export default App;
