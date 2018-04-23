import React from "react";
import { Card, CardTitle, CardHeader, CardBody, CardText } from "reactstrap";
import "./NoteCard.css";

const NoteCard = props => {
  return (
    <Card className="note-card">
      <CardHeader>{props.note.title}</CardHeader>
      <CardBody>
        <CardText>{props.note.content}</CardText>
      </CardBody>
    </Card>
  );
};

export default NoteCard;
