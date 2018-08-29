import React, { Component } from 'react';
import SideBar from './Components/NavBar/SideBar';
import MainContent from './Components/MainContent/MainContent';
import './index.css';
class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <SideBar />
        <MainContent />
      </div>
    );
  }
}

export default App;
