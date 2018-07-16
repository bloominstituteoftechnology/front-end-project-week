import React, { Component } from "react";

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Create New Note:</h3>
        <input
          type="text"
          name="title"
          onChange={this.props.editNoteHandler}
          //   tvalue={this.props.value}
          placeholder="Note Title"
        />
        <input
          type="text"
          name="textBody"
          onChange={this.props.editNoteHandler}
          //   bvalue={this.props.value}
          placeholder="Note Content"
        />
        <button onClick={this.props.handleSubmitNote}>Save</button>
      </div>
    );
  }
}

export default NewNote;
