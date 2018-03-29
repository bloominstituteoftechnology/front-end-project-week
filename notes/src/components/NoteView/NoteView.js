import React from 'react';
import { Form, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar.js';
import DeleteModal from './DeleteModal.js';

import './NoteView.css';

const NoteView = (props) => {
  return (
    <Container className="container">
      <Form>
        <Row>
          <Col className='sideCol'>
            <Sidebar />
          </Col>
          <Col>
            <h2 className="noteName"> Note Name </h2>
            <p className="noteText"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </Col>
          <Link to='/EditNote'>
            <p className='editNote'> edit </p>
          </Link>
          <DeleteModal />
        </Row>
      </Form>
    </Container>
  );
};

export default NoteView;