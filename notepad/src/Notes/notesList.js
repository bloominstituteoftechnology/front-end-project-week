import React from 'react';
import Note from './Note';
import { Container, Row, Col, CardDeck } from 'reactstrap';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function NotesList({ notes }) {

  return (
    <Container>
    <Row>
      <h3>Your Notes:</h3>
    </Row>
    <Row>
      <CardDeck>
        {notes.map((note) => {
          return <Col key={note.id} className='pl-0 pr-0' xs='4'><Note note={note} /></Col>;
        })}
      </CardDeck>
    </Row>
    // </Container>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps, {})(NotesList));
