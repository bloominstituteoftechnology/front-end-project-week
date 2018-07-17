import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const NoteCard = props => {
  return (
    <div>
      <NavLink to={`/note-view/${props.note.id}`}>
        <Card>
          <CardBody>
            <CardTitle>{props.note.title}</CardTitle>
            <CardText>{props.note.content}</CardText>
          </CardBody>
        </Card>
      </NavLink>
    </div>
  );
};

export default NoteCard;
