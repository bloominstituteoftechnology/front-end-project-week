import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

export default App;
