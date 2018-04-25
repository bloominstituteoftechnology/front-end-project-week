
import React from "react";
import "./Note.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Note = props => {
  //returns the Notecard
  const { title, description } = props.note;
  return (
    <div>
      <Card className="Note">
        <CardTitl>{title}</CardTitl>
        <CardBody>{description}</CardBody>
      </Card>
    </div>
  );
};

export default Note;