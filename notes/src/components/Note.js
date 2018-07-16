import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      note: ""
    };
  }
  render() {
    return (
      <div className="ind-card">
        <Card>
          <CardTitle>{this.props.note.title}</CardTitle>
          <hr />
          <CardText>{this.props.note.body}</CardText>
        </Card>
      </div>
    );
  }
}

export default Note;
