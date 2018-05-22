import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const NoteCard = props => {
  const notePreview = `${props.note.value.slice(0, 100)}...`;
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default NoteCard;