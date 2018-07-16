import React, { Component } from "react";

class DeleteNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h4>Are you sure you want to delete this?</h4>
        <button>Delete</button>
        <button>No</button>
      </div>
    );
  }
}

export default DeleteNote;
