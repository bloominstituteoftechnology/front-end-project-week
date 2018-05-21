import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Row>
          <Col>Nav</Col>
          <Col>Main</Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
