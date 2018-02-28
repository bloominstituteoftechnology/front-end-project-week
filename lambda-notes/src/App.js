import React, { Component } from 'react';
import LeftColumn from './Components/LeftColumn';
import RightColumn from './Components/RightColumn';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <LeftColumn />
        <RightColumn />
      </div>
    );
  }
}

export default App;
