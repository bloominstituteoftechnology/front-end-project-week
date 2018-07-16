import React, { Component } from "react";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>{this.props.note.title}</div>
        <div>{this.props.note.textBody}</div>
      </div>
    );
  }
}

export default Note;
