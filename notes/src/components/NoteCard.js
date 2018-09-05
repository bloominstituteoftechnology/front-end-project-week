import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
// import CreateView from "./CreateView";

const NoteCard = props => {
  const { title, content } = props.notes;

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{content}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default NoteCard;
