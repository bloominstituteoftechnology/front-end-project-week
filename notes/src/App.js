import React, { Component } from 'react';
import SideNav from './components/SideNav/SideNav';
import MainContent from './components/MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <MainContent />
      </div>
    );
  }
}

export default App;
