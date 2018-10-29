// React imports
import React, { Component } from 'react';
// CSS imports
import './App.css';
// Component imports
import { SideNavigationView, ListView } from './views';
class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNavigationView />
        <ListView />
      </div>
    );
  }
}

export default App;
