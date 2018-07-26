import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note
    };
  }
  render() {
    return (
      <Card body>
        <CardTitle>{this.state.note.title}</CardTitle>
        <CardText>{this.state.note.textBody}</CardText>
        <Link to={`/note/${this.state.note._id}`}>
          <Button>View Card</Button>
        </Link>
      </Card>
    );
  }
}

export default Note;

{
  /* <li>
        <Link to={`/note/${this.state.note._id}`}>
          {this.state.note.textBody}
        </Link>
      </li> */
}
