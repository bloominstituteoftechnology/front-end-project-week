import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

import Sidebar from './components/Sidebar/Sidebar.js';
import ListView from './components/ListView/ListView.js';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row>
          <Col xs='3'>
            <Route path='/' component={Sidebar} />
          </Col>
          <Col xs='9'>
            <Route exact path='/' component={ListView} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
