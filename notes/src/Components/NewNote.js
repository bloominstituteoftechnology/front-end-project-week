import React, { Component } from "react";
import "../App.css";

class NewNote extends Component {
  render() {
    return (
      <div className="new-note">
        <h2>Create New Note:</h2>
        <input
          type="text"
          placeholder="New Title"
          onChange={this.props.changeHandler}
          name="title"
        />
        <textarea
          placeholder="New Content"
          onChange={this.props.changeHandler}
          name="textBody"
        />
        <div className="save-button" onClick={this.props.createNote}>
          Save
        </div>
      </div>
    );
  }
}

export default NewNote;
