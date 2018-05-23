import React from "react";
import { connect } from "react-redux";
import { addNote } from "../actions/notesAction";

class AddNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let note = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.addNote(note);
    this.setState({title: "", body: ""});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
            required
            placeholder="Enter Title"
          />
          <input
            onChange={this.handleChange}
            value={this.state.body}
            type="text"
            name="body"
            required
            placeholder="Notes..."
          />
          <button>
            Add Note
          </button>
        </form>
    );
  }
}

export default connect(null, { addNote })(AddNoteForm);