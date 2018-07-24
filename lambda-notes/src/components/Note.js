import React, { Component } from "react";
import { Link } from "react-router-dom";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note
    };
  }
  render() {
    return <li>{this.state.note.textBody}</li>;
  }
}

export default Note;
