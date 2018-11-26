import React, { Component } from "react";
import "../App.css";

class EditNote extends Component {
  render() {
    return (
      <div className="new-note">
        <h2>Edit Note:</h2>
        <input
          type="text"
          defaultValue={this.props.title}
          onChange={this.props.changeHandler}
          name="title"
        />
        <textarea
          defaultValue={this.props.textBody}
          onChange={this.props.changeHandler}
          name="textBody"
        />
        <div className="save-button" onClick={this.props.updateNote}>
          Save
        </div>
      </div>
    );
  }
}

export default EditNote;
