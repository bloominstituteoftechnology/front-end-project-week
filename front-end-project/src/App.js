import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Note from './components/note'
import NotesList from './components/notesList'



class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App">
          <Row>
            <Col sm={3} className="leftSide">
              <h1>Lambda Notes</h1>
              <Link to ="/"><Button size="lg" className="my-2">View Your Notes</Button></Link>
              <Link to ="/createNote"><Button size="lg" className="my-2">+ Create New Note</Button></Link>
            </Col>
            <Col sm={9} className="rightSide">
              <NotesList/>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool
};

export default App;
