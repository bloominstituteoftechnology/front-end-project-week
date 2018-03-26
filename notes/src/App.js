import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Display from "./components/Display";
import { Row, Col, Container } from "reactstrap";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return (
      <Container className="App bg-dark container-fluid">
        <Row className="app-wrapper">
          <Col sm={3} className="leftSide">
            <Nav />
          </Col>
          <Col sm={9} className="rightSide ">
            <Display />
          </Col>
        </Row>
      </Container>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool
};
export default App;
