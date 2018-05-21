import React, { Component } from 'react';
import logo from './logo.svg';
import SideBar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SideBar />
      </div>
    );
  }
}

export default App;
