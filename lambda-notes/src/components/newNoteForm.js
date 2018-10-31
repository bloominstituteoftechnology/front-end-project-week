import React from "react";

// Auxillary Packages
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createNote } from "../actions";

// CSS
import "../CSS/newNoteForm.css";

class NewNoteForm extends React.Component {
  state = {
    title: "",
    textBody: "",
    tags: ""
  };

  handleSubmit = () => {
    if (this.state.title.trim() && this.state.textBody.trim()) {
      this.props.createNote({
        tags: JSON.stringify(this.state.tags.split(", ")),
        title: this.state.title,
        textBody: this.state.textBody
      });
      this.props.history.push("/");
    }
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form-group"
        style={{ height: "100vh", padding: "20px" }}
      >
        <h2>New Note:</h2>
        <input
          onChange={this.onChangeHandler}
          name="title"
          type="text"
          placeholder="Title"
          className="form-control my-3"
          style={{ fontSize: "1.2rem", padding: "20px" }}
        />
        <textarea
          onChange={this.onChangeHandler}
          name="textBody"
          type="text"
          placeholder="Text Body"
          className="form-control my-3"
          rows="10"
          cols="30"
          style={{ fontSize: "1.2rem", padding: "20px" }}
        />
        <input
          onChange={this.onChangeHandler}
          name="tags"
          type="text"
          placeholder="Tags"
          className="form-control my-3"
          style={{ fontSize: "1.2rem", padding: "20px" }}
        />
        <button
          onClick={this.handleSubmit}
          type="button"
          className="save-btn btn px-5"
        >
          Save
        </button>
      </form>
    );
  }
}

export default withRouter(
  connect(
    null,
    { createNote }
  )(NewNoteForm)
);
