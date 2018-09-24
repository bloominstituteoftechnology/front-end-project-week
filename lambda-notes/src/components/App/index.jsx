import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import './index.css';

import SideBar from '../SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
      </div>
    );
  }
}

export default App;
