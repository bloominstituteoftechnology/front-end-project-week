import React, { Component } from 'react';
import './index.css';
import SideArea from './components/SideArea/SideArea';
import MainArea from './components/MainArea/MainArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideArea />
        <MainArea />
      </div>
    );
  }
}

export default App;
