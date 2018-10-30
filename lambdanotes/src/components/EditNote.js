import React, { Component } from "react";
import { connect } from "react-redux";
import { updateNote } from "../actions";
import "../styles/EditNote.css";

class EditNote extends Component {
  state = {
    title: "",
    textBody: ""
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();

    this.props.updateNote({
      _id: this.props.note._id,
      title: this.state.title,
      textBody: this.state.textBody
    });

    this.props.doneEditing();
  };

  componentDidMount() {
    this.setState({
      title: this.props.note.title,
      textBody: this.props.note.textBody
    });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h2>Edit Note:</h2>
        <input
          className="title-input"
          name="title"
          type="text"
          placeholder="Note Title"
          value={this.state.title}
          onChange={this.changeHandler}
          required
        />
        <input
          className="content-input"
          name="textBody"
          type="text"
          placeholder="Note Content"
          value={this.state.textBody}
          onChange={this.changeHandler}
          required
        />
        <input type="submit" value="Update" />
      </form>
    );
  }
}

export default connect(
  null,
  { updateNote }
)(EditNote);
