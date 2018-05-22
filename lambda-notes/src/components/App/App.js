import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes';
import Sidebar from '../Sidebar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="view col">
              <Routes />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
