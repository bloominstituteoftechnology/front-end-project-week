import React, { Component } from "react";
// import { Container, Row, Col } from "reactstrap";
import { NoteBorder, TitleStyle, BodyStyle } from "../../ReusableStyles";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NoteBorder
        onClick={() => {
          this.props.selectHandler(this.props.note);
        }}
      >
        <TitleStyle>{this.props.note.title}</TitleStyle>
        <BodyStyle>{this.props.note.textBody}</BodyStyle>
      </NoteBorder>
    );
  }
}

export default Note;
