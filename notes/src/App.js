import React, { Component } from 'react';
import './App.css';
import LeftBar from './Components/LeftBar';
import List from './Components/List';
import Delete from './Components/Delete';

class App extends Component {
  render() {
    return (
      <div>
        <LeftBar />
        <div className="App">
          <div className="title">Your Notes:</div>
          <List />
        </div>
      </div>
    );
  }
}

export default App;
