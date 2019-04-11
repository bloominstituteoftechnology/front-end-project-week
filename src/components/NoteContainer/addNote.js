import React, { Component } from "react";
import axios from "axios";
import "./NoteEdit.css";

const url = process.env.REACT_APP_DB_URL;

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNote = event => {
    event.preventDefault();
    const newNote = { title: this.state.title, textBody: this.state.textBody };
    const token = localStorage.getItem("bit_token");
    const options = {
      headers: {
        authorization: token
      }
    };
    if (token) {
      axios
        .post(`${url}/note/create`, newNote, options)
        .then(response => {
          this.props.changeState(response.data);
        })
        .catch(err => console.log(err));
      this.setState({
        title: "",
        textBody: ""
      });
      this.props.history.push("/");
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="add-note-wrapper">
        <form onSubmit={this.addNote} className="edit-note">
          <h1 className="add-note-h1">Create New Note:</h1>
          <input
            className="edit-title"
            placeholder="Note Title"
            value={this.state.title}
            name="title"
            onChange={this.handleInput}
          />
          <textarea
            className="edit-textBody"
            placeholder="Note Content"
            value={this.state.textBody}
            name="textBody"
            onChange={this.handleInput}
          />
          <button
            type="submit"
            onClick={this.handleInput}
            className="save-edit-btn"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default AddNote;
