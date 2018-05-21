import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { List, Note, NewNote, EditNote, DeleteNote } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="3" className="sidebar">
              <h1>Lambda Notes</h1>
              <button>View Your Notes</button>
              <button>+ Create New Note</button>
            </Col>
            <Col xs="9" className="content-container">
              <List />
              <Note />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
