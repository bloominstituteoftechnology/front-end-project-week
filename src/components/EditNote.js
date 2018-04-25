import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditNote extends Component {
  render() {
    return (
      <div className="add-note">
        <h3>Edit Note: </h3>
        <input
          onChange={this.onChange}
          name="title"
          type="text"
          placeholder="Note title"
        />
        <textarea
          onChange={this.onChange}
          name="text"
          placeholder="Note Content"
          rows="20"
        />
        <Link onClick={this.handleClick} className="save-button" to="/">
          Update
        </Link>
      </div>
    );
  }
}

export default EditNote;
