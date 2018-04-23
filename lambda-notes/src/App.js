import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Container, Row, Col, Button } from 'reactstrap';

import NotesList from './components/notesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <div className="side-nav col-2">
              <br />
              <h2>Lambda<br />Notes</h2>
              <Button className="btn-info btn-block">View Your Notes</Button>
              <br />
              <Button className="btn-info btn-block">+ Create New Note</Button>
            </div>
            <div className="main-view col-10">
              <Route exact path="/" component={NotesList} />
              <Route component={NotesList} />
            </div>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
