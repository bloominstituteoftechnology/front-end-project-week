import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const Template = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.note.title}</CardTitle>
          <CardText>{props.note.content}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Template;

// Use card component from reactstrap to format the note
