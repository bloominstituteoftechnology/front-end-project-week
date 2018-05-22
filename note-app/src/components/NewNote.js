import React from "react";
import { addNote } from "../actions/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: ""
    };
  }

  componentDidMount() {
    this.props.notes;
  }

  refresh = () => {
    this.props.notes;
  };

  handleTextInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  count = 9;

  createNewNote = e => {
    this.count++;
    let { title, body } = this.state;
    let newNote = {
      title,
      body,
      id: this.count
    };

    e.preventDefault();
    this.props.addNote(newNote);
    this.setState({ title: "", body: "" });
  };

  render() {
    return (
      <div className="newNote-container">
        <div className="create-newNote">Create New Note:</div>
        <input
          onChange={this.handleTextInput}
          name="title"
          value={this.state.title}
          className="title-input"
          type="text"
          placeholder="Title"
        />
        <textarea
          onChange={this.handleTextInput}
          name="body"
          value={this.state.body}
          className="content-input"
          cols="30"
          rows="10"
          type="text"
          placeholder="Content"
        />
        <button onClick={this.createNewNote} text="Save" />
      </div>
    );
  }
}

export default connect(null, { addNote })(NewNote);
