import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";

class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      title: [],
      textBody: []
    };
  }

  handleAddNote = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  AddNote = () => {
    axios
      .post(`https://killer-notes.herokuapp.com/note/create`, {
        title: this.state.title,
        textBody: this.state.textBody
      })
      .then(response => {
        console.log("check postman and all other sources");
      })
      .catch(error => {
        console.error(error);
      });
    this.setState({ title: "" });
    this.setState({ textBody: "" });
  };

  render() {
    return (
      <div className="Create__note">
        <h1>Create New Note:</h1>
        <input
          type="text"
          placeholder="Note Title"
          className="Create__note-title"
          name="title"
          value={this.state.title}
          onChange={this.handleAddNote}
        />{" "}
        <br /> <br />
        <textarea
          type="text"
          placeholder="Note Body"
          className="Create__note-body"
          name="textBody"
          value={this.state.textBody}
          onChange={this.handleAddNote}
        />
        <br /> <br />
        <Link to="/viewnotes">
          <button className="Create__note-button" onClick={this.AddNote}>
            Save
          </button>
        </Link>
      </div> // container div end
    );
  }
}

export default CreateNote;
