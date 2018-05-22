import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

import Sidebar from './components/Sidebar/Sidebar.js';
import ListView from './components/ListView/ListView.js';
import CreateNote from './components/CreateNote/CreateNote.js';
import ViewNote from './components/ViewNote/ViewNote.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='sidebarContainer'>
          <Route path='/' component={Sidebar} />
        </div>
        <div className='viewContainer'>
          <Route exact path='/' component={ListView} />
          <Route path='/create' component={CreateNote} />
          <Route exact path='/note' component={ViewNote} />
        </div>
      </div>
    );
  }
}

export default App;
