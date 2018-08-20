import React, { Component } from 'react';

import '../styles/App.css';
import SideBar from './side-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="heading">
          <h3 className= "app-header">List View</h3>
          <hr/>
        </div>
        <div className = "main-container">
          <SideBar />

        </div>
        
      </div>
    );
  }
}

export default App;
