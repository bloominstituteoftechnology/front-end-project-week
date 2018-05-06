import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { Container, Row, Col } from 'reactstrap';




class App extends Component {


  render() {
    return (
      <div className="App">
      <Container>
        <div>
          <Row>
            <Col xs="6" sm="4">
              <h2>Lambda Notes</h2>
              <SideBar />
            </Col>
            <Col xs="6" sm="8">
              <Main/>
            </Col>
          </Row>
        </div>
    </Container>

      </div>
    );
  }
}

export default App;
