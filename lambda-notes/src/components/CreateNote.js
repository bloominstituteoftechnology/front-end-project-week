import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: props.edit,
      note: props.note,
      title: props.title,
      textBody: props.textBody,
      submitted: false
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    if (!this.state.edit) {
      console.log("creating new note");
      this.setState({ title: "", textBody: "" });
    } else {
      console.log("updating note");
    }
  }

  addNote = event => {
    event.preventDefault();
    const { title, textBody } = this.state;
    const newNote = { title, textBody };

    if (this.state.edit) {
      const updatedNotes = Object.assign({}, newNote, {
        id: this.state.note.id
      });
      axios
        .put(`http://localhost:4444/notes/${updatedNotes.id}`, updatedNotes)
        .then(res => {
          console.log(res.data);
          this.setState({ submitted: true });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:4444/notes", newNote)
        .then(res => {
          console.log(res.data);
          this.setState({ title: "", textBody: "", submitted: true });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return this.state.submitted ? (
      <Redirect to="/notes" />
    ) : (
      <div className="createnote">
        <h2 className="createheading">Create New Note:</h2>
        <form onSubmit={this.addNote}>
          <input
            className="notetitle"
            onChange={this.handleInputChange}
            name="title"
            type="text"
            placeholder="Note title"
            value={this.state.title}
          />
          <input
            className="notecontent"
            type="textarea"
            onChange={this.handleInputChange}
            name="textBody"
            placeholder="Note content"
            value={this.state.textBody}
          />

          <button className="savebutton">Save</button>
        </form>
      </div>
    );
  }
}

export default CreateNote;
