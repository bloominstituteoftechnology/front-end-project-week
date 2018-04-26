import React, { Component } from "react";

import { Link } from "react-router-dom";

class AddNote extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    if (this.state.title === "" && this.state.text === "") {
      alert("Do you wish to abort your note and return to Lambda Notes?");
      return false;
    } else {
      this.props.onSubmit(this.state.title, this.state.text);
    }
  };

  render() {
    return (
      <div className="add-note">
        <h3>Create New Note: </h3>
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
        <Link
          onClick={this.handleClick}
          className="save-button"
          to="/NotesList"
        >
          Save
        </Link>
      </div>
    );
  }
}

export default AddNote;
