import React, { Component } from 'react';

import ListView from './components/ListView/ListView'
import Sidebar from './components/Sidebar/Sidebar'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <ListView />
      </div>
    );
  }
}

export default App;
