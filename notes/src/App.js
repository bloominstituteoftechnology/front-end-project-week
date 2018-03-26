import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Display from "./components/Display";
import { Row, Col, Container } from "reactstrap";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App bg-dark container-fluid">
          <Row className="app-wrapper">
            <Col sm={3} className="leftSide">
              <Nav />
            </Col>
            <Col sm={9} className="rightSide ">
              <Display />
            </Col>
          </Row>
          <Route exact path="/" component={Display} />
        </Container>
      </Router>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool
};
export default App;
