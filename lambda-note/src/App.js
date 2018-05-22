import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SideBar from './components/sideBar';
import MainBar from './components/MainBar';

class App extends Component {
  render() {

    return (
      <div ClassName = "App">
      <Container ClassName = "container">
      <Row>
        <SideBar />
        <MainBar />
      </Row>
      </Container >
      </div>
    );
  }
}

export default App;
