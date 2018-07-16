import React, { Component } from "react";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Edit Note:</h3>
        <div>{this.props.note.title}</div>
        <div>{this.props.note.textBody}</div>
        <button>Update</button>
      </div>
    );
  }
}

export default EditNote;
