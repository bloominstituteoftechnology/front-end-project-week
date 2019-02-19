import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: [],
      title: "",
      body: "",
      noteEdited: false
    };
  }

  componentDidMount() {
    console.log(this.props.notes);
    this.props.notes.map(note => {
      if (this.props.match.params.id === note.id.toString()) {
        this.setState({ title: note.title, body: note.textBody });
      }
    });
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const note = {
      title: this.state.title,
      textBody: this.state.body
    };

    axios
      .put(`https://robs-back-end-project.herokuapp.com/api/notes/${id}`, note)
      .then(res => {
        console.log(res);
        this.setState({ title: "", body: "", noteEdited: true });
      })
      .catch(() => alert("Error editing note"));
  };

  render() {
    if (this.state.noteEdited) {
      this.props.getNotes();
      return <Redirect to="/" />;
    }
    return (
      <div className="pageWrapper">
        <h1>Edit Note:</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            placeholder="Note Title"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <textarea
            required
            placeholder="Note Text"
            name="body"
            value={this.state.body}
            onChange={this.handleInput}
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default EditNote;
