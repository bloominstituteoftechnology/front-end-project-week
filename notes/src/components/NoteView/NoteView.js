import React from 'react';
import { Form, Container, Row, Col } from 'reactstrap';

import Sidebar from '../Sidebar/Sidebar.js';

import './NoteView.css';

const NoteView = (props) => {
  return (
    <Container>
      <Form>
        <Row>
          <Col className='sideCol'>
            <Sidebar />
          </Col>
          <Col>
            <h2 className="noteName"> Note Name </h2>
            <p className="noteText"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default NoteView;