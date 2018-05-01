import React, { Component } from 'react';

import Sidebar from './Components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
      </div>
    );
  }
}

export default App;
