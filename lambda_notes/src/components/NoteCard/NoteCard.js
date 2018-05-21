import React from 'react';
import '../NoteCard/NoteCard.css';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const NoteCard = props => {
  return (
    props.notes.map(note => {
      return (
      <Card className="Card-Style" key={note.id}>
        <CardBody className="Card-Body">
          <CardTitle className="Card-Title">
            {note.title}
          </CardTitle>
          <CardText className="Card-Text">
            {note.content}
          </CardText>
        </CardBody>
      </Card>
    )})
  )
}

export default NoteCard;