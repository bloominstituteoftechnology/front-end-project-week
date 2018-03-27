import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export default function Note({ note }) {
  return (
    <div>
      <Card body outline>
        <CardBody>
          <CardTitle>{note.title}</CardTitle>
          <CardText>{note.content}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}