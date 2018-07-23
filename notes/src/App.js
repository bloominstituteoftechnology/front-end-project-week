import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

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
