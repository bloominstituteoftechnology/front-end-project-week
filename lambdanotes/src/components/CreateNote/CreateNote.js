import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

export default class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleNewInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCreateNote = () => {
    const note = {
      title: this.state.title,
      content: this.state.content
    };

    axios
      .post("http://localhost:5000/notes", note)
      .then(savedNote => {
        console.log(note);
        this.props.getNotes();
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ title: "", content: "" });
  };

  render() {
    return (
      <div className="createNote__background">
        <h4 className="createNote__title">Create New Note:</h4>
        <form className="createNote__form">
          <div>
            <label>
              <input
                type="text"
                onChange={this.handleNewInput}
                name="title"
                value={this.state.title}
                placeholder="Note Title"
                size="50"
              />
            </label>
          </div>

          <div>
            <label>
              <textarea
                type="text"
                onChange={this.handleNewInput}
                name="content"
                value={this.state.content}
                placeholder="Note Content"
                cols="100"
                rows="20"
              />
            </label>
          </div>

          <Link to="/">
            <button type="button" onClick={this.handleCreateNote}>
              Save
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
