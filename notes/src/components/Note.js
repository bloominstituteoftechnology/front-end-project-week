import React from "react";

class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      note: ""
    };
  }
  render() {
    return (
      <div>
        <p>{this.props.note.title}</p>
        <p>{this.props.note.body}</p>
      </div>
    );
  }
}

export default Note;
