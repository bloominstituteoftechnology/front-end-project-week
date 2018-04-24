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

class Note extends React.Component {
  constructor(props) {
    super(props);
  }
//returns the Notecard
  render() {
    return(
      <div>
        <Card className="NoteCard">
        <CardTitle>{props.note.title}</CardTitle>
        <CardBody>{props.note.description}</CardBody>
        </Card>
      </div>
    )
  };
}

export default Note;