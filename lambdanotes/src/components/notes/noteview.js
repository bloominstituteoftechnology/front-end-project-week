import React, { Component } from "react";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button>edit</button>
        <button>delete</button>
        <h3>{this.props.note.title}</h3>
        <div>{this.props.note.textBody}</div>
      </div>
    );
  }
}

export default NoteView;
