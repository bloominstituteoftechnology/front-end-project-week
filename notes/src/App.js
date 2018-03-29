import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';


import Sidebar from './components/Sidebar/Sidebar.js';
import Notes from './components/Notes/Notes.js';
import CreateNew from './components/CreateNew/CreateNew.js';
import NoteView from './components/NoteView/NoteView.js';
import EditNote from './components/EditNote/EditNote.js';


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Sidebar />
      //   <Notes />
      // </div>
      <Container className="container">
        <Row>
          <Col className="sideCol">
            <Sidebar />
          </Col>
          <Col className="notesCol">
            <h2 className="notesText"> Your Notes: </h2>
            <Notes />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
