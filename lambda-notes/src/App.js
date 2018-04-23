import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import NotesList from './components/notesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="side-nav col-2">
            <h2>Lambda<br />Notes</h2>
            <Button className="btn-info btn-block">View Your Notes</Button>
            <br />
            <Button className="btn-info btn-block">+ Create New Note</Button>
          </div>
          <div className="main-view col-10">
              <NotesList />
          </div>
        </Row>
      </Container>
    );
  }
}

export default App;
