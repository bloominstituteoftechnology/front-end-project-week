import React, { Component } from 'react';
import LeftNav from './components/LeftNav/LeftNav';
import MainContent from './components/MainContent/MainContent';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="left-nav col-sm-3">
            <LeftNav />
          </div>
          <div className="main-content col-sm-9">
            <MainContent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
