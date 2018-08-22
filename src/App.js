import React, { Component } from 'react';
import LeftNav from './components/LeftNav/LeftNav';
import MainContent from './components/MainContent/MainContent';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="left-nav col-md-3">
            <LeftNav />
          </div>
          <div className="main-content col-md-9">
            <MainContent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
