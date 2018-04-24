import React from "react";
import './Note.css';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Note = () => {
//returns the Notecard
    return(
      <div>
        <Card className="Note">
        <CardTitle>{props.note.title}</CardTitle>
        <CardBody>{props.note.description}</CardBody>
        </Card>
      </div>
    )
};

export default Note;