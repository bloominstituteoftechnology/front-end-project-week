import React, { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap";

export default class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
    };
  }

  render() {
    const note = this.props.note.find(
      note => note.id === parseInt(this.props.match.params.id, 10) //OR HAVE IT === this.props.match.params.id
                                                                  // if each individual id is a string
    );
    console.log("im props", this.props);
    return (
      <div>
        <Card>
          <CardTitle>{note.title}</CardTitle>
          <CardText>{note.content}</CardText>
        </Card>
      </div>
    );
  }
}
