import React, { Component } from 'react';
import './App.css';
import AllNotes from './components/AllNotes';
import SideBar from './components/SideBar';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App row">
          <SideBar />
          <AllNotes />
        </div>
        
      </div>
    );
  }
}

export default App;
