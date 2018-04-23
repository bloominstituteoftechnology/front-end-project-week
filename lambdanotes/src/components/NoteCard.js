import React from "react";
import { Card, CardTitle, CardHeader, CardBody, CardText } from "reactstrap";

const NoteCard = props => {
  return (
    <Card>
      <CardHeader>{props.note.title}</CardHeader>
      <CardBody>
        <CardText>{props.note.content}</CardText>
      </CardBody>
    </Card>
  );
};

export default NoteCard;
