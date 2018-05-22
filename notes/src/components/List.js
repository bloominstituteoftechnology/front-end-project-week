import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const NoteButton = () => {
    return (
        <Col xs="4">
            <Link to="/note">
                <button>
                    <h1>Note Title</h1>
                    <p>Morbi pharetra sem vel elit pulvinar interdum. Cras aliquam accumsan nunc.</p>
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
            <h3>Your Notes:</h3>
                <Row>
                    <NoteButton />
                    <NoteButton />
                    <NoteButton />
                </Row>
                <Row>
                    <NoteButton />
                    <NoteButton />
                    <NoteButton />
                </Row>
                <Row>
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