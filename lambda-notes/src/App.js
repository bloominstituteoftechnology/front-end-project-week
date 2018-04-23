import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavColumn from './components/navigation';

class App extends Component {
  render() {
    return (
      <div>
        <NavColumn />
        {/* <PrimaryContainer /> */}
      </div>
    );
  }
}

export default App;
