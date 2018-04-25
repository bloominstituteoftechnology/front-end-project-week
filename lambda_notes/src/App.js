import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Container, Button } from "reactstrap";

import NotesList from "./components/NotesList";
import "./App.css";



export default class App extends Component {

  render() {

    return (
      <Router>
        <Container fluid={true} className="App">
          <Row className="app-wrapper">
            <Col sm={3} className="leftSide position-fixed">
              <h1 className="header my-4">Lambda Notes</h1>

              <Link to="/">
                <Button className="w-100 my-2 p-2">
                  View Your Notes
                </Button>
              </Link>

              <Link to="/createNote">
                <Button className="w-100 my-2 p-2">
                  + Create Note 
                </Button>
              </Link>
            </Col>
            <Col sm={9} className="rightSide offset-3">
            <Route exact="/" component={NotesList} />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}