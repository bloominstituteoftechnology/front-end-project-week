import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col className="left-side" xs="3">LEFT SIDE</Col>
            <Col className="content" xs="9">CONTENT</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
