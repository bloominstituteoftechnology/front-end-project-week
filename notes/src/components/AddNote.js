import React from "react";
import { Form } from "../styled/AddNote";
import { fetchSingle, saveNote, editNote } from "../actions";

import { connect } from "react-redux";

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: ""
    };
  }

  componentDidMount() {
    if (this.props.edit) {
      this.setState({
        title: this.props.note.title,
        textBody: this.props.note.textBody
      });
    }
    window.scrollTo(0, 0);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    let id = this.props.match.params.id;
    if (this.props.edit) {
      this.props.editNote(this.state, id);
    } else {
      this.props.saveNote(this.state);
    }
    this.props.history.push("/notes");
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <h3>{this.props.edit ? "Edit Note" : "Create New Note"}</h3>
        <input
          name="title"
          onChange={this.handleChange}
          required={!this.props.edit}
          value={this.state.title}
          placeholder="Note title"
        />
        <textarea
          name="textBody"
          value={this.state.textBody}
          onChange={this.handleChange}
          required={!this.props.edit}
          placeholder="Note content"
        />
        <div onClick={this.submitHandler}>
          {this.props.edit ? "Edit Note" : "Add Note"}
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.note,
    error: state.error,
    fetchSingle: state.fetchSingle
  };
};

export default connect(
  mapStateToProps,
  { fetchSingle, saveNote, editNote }
)(NoteForm);
