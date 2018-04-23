import React from "react";
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

  render() {
    return(
      <div>
        <Card className="NoteCard">
        <CardTitle>{this.props.title}</CardTitle>
        <CardBody>{this.props.description}</CardBody>
        </Card>
      </div>
    )
  };
}

export default Note;