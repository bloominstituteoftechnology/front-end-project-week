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

  reload = () => {
    window.location.reload()
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
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="add-note">
        <h2>Create Note</h2>
        <form onSubmit={this.handleSubmit}>
            <input
              className="add-title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              required
              placeholder="Enter Title"
            />
            <br />
            <textarea
              className="add-body"
              onChange={this.handleChange}
              value={this.state.body}
              type="text"
              name="body"
              required
              placeholder="Notes..."
            >
            </textarea>
            <br />
            <button className="add-btn">
              Add Note
            </button>
          </form>
        </div>
    );
  }
}

export default connect(null, { addNote })(AddNoteForm);