import React, { Component } from 'react';
import SideBar from './Components/NavBar/SideBar';
import MainContent from './Components/MainContent/MainContent';
class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <MainContent />
        <SideBar />
      </div>
    );
  }
}

export default App;
