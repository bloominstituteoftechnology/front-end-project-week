import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './List.css';

const NoteButton = () => {
    return (
        <Col xs="4">
            <Link to="/note">
                <button style={{ color: '#4A4A4A'}} className="note-card">
                    <h5 className="note-title">Note Title</h5>
                    <p className="card-body">Morbi pharetra sem vel elit pulvinar interdum. Cras aliquam accumsan nunc.</p>
                </button>
            </Link>
        </Col>
    )
}

export default class List extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="note-list">
            <h3 className="note-header">Your Notes:</h3>
                <Row className="row-one">
                    <NoteButton />
                    <NoteButton />
                    <NoteButton />
                </Row>
                <Row className="row-two">
                    <NoteButton />
                    <NoteButton />
                    <NoteButton />
                </Row>
                <Row className="row-three">
                    <NoteButton />
                    <NoteButton />
                    <NoteButton />
                </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}