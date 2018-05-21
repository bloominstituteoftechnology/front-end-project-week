import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

import Sidebar from './components/Sidebar/Sidebar.js';
import ListView from './components/ListView/ListView.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className='sidebarContainer'>
          <Route path='/' component={Sidebar} />
        </div>
        <div className='viewContainer'>
          <Route exact path='/' component={ListView} />
        </div>
      </div>
    );
  }
}

export default App;
