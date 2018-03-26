import React, { Component } from 'react';
import './App.css';

import SideNav from './components/SideNav';
import mainBody from './components/mainBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <mainBody />
      </div>
    );
  }
}

export default App;
