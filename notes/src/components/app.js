import React, { Component } from 'react';

//import { Route } from 'react-router-dom';

import { Container, Row } from 'reactstrap';

import Notes from './notes';
import NavBar from './navbar';
import './app.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="Background">
            <NavBar/>
            <Notes/>
        </Row>   
      </Container>
    );
  }
}

export default App;
