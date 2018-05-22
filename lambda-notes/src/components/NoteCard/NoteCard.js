import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const NoteCard = props => {
  const notePreview = `${props.note.value.slice(0, 100)}...`;
  return (
    <React.Fragment>
      <Link to={`/note/${props.note.id}`}>
        <Card className="note-preview-card">
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