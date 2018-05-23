import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const NoteCard = props => {
  const notePreview = `${props.note.contents.slice(0, 100)}...`;
  return (
    <React.Fragment>
      <Link className="note-card-link" to={`/note/${props.note.id}`}>
        <Card className="note-card">
          <CardBody>
            <CardTitle>
              {props.note.title}
            </CardTitle>
            <CardText>
              {notePreview}
            </CardText>
          </CardBody>
        </Card>
      </Link>
    </React.Fragment>
  );
}

export default NoteCard;