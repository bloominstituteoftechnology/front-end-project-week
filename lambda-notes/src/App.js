import React, { Component } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import MainBody from './components/mainBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <MainBody />
        </div>
    );
  }
}

export default App;
