import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Routes from '../Routes';
import history from '../../constants/history';
import Sidebar from '../Sidebar';

class App extends Component {
  render() {
    return (
      <Router history={history}>
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
