import React from 'react';
import Note from './Note';
import { Container, Row, CardDeck } from 'reactstrap';

function NotesList(props) {

  return (
    <Container>
      <Row>
        <h3>Your Notes:</h3>
      </Row>
      <Row xs='4'>
        <CardDeck>
          {props.notes.map((note) => {
            return <Note
              key={note.id}
              note={note}
            />;
          })}
        </CardDeck>
      </Row>
    </Container>
  );
}

export default NotesList;