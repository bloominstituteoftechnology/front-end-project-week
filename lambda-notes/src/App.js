import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import NotesList from './components/notesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="side-menu col-2">
            side menu
          </div>
          <div className="note-list-container col-10">
              <NotesList />
          </div>
        </Row>
    </Container>
    );
  }
}

export default App;
