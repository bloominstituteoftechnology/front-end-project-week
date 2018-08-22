import React, { Component } from "react";

class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: props.notes
    };
  }

  render() {
    return (
      <div className="singleNoteDiv">
        <h2>Hey</h2>
      </div>
    );
  }
}

export default SingleNote;
