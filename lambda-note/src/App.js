import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SideBar from './components/sideBar';
import MainBar from './components/MainBar';
import MainBarComponent from './components/MainBarComponent';
import EditNote from './components/editNote';

class App extends Component {

  render() {

    return (
      <div ClassName = "App">
      <Container ClassName = "container">
      <Row>
        <SideBar />
        <Col>
           <EditNote />
        </Col>
        {/*<MainBarComponent />*/}
      </Row>
      </Container >
      </div>
    );
  }
}

export default App;
