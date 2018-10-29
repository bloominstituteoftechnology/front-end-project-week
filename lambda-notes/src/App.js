// React imports
import React, { Component } from 'react';
// CSS imports
import './App.css';
// Component imports
import { SideNavigationView } from './views';
class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNavigationView />
        <h2>hello</h2>
      </div>
    );
  }
}

export default App;
