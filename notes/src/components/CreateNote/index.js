import React from "react";
import PropTypes from "prop-types";

import "./createNote.css";

class CreateNote extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      textBody: ""
    };
  }
  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createNote = e => {
    e.preventDefault();
    this.props.createNote({ ...this.state });

    return this.setState({
      title: "",
      textBody: ""
    });
  };

  render() {
    return (
      <form id="create_form" onSubmit={this.createNote}>
        <h2>Create New Note:</h2>
        <input
          onChange={this.inputHandler}
          placeholder="Note Title"
          name="title"
          value={this.state.title}
          required
        />
        <textarea
          onChange={this.inputHandler}
          placeholder="Note Content"
          name="textBody"
          value={this.state.textBody}
          required
        />
        <section className="submitAndMsg">
          {this.props.creatingNote ? (
            <p className="loading">Saving Note...</p>
          ) : (
            <button type="submit" className="links">
              Save
            </button>
          )}
        </section>
      </form>
    );
  }
}

CreateNote.propTypes = {
  createNote: PropTypes.func.isRequired,
  creatingNote: PropTypes.bool.isRequired
};
export default CreateNote;
