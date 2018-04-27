import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      title: "",
      content: ""
    };
  }

  componentDidMount() {
    this.updateNote();
  }


  handleNewInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateNote = id => {
    const note = {};
    if (this.state.title !== "") {
      note.title = this.state.title;
    }
    if (this.state.content !== "") {
      note.content = this.state.content;
    }

    axios
      .put(`http://localhost:5000/notes/${id}`, note)
      .then(response => {
        this.props.getNotes();
      })
      .catch(err => {
        console.error(err);
      });

    this.setState({ title: "", content: "" });
  };

  render() {
    return (
      <div>
            <h1>Edit Note:</h1>
            <form>
              <label>
                <input
                  type="text"
                  onChange={this.handleNewInput}
                  name="title"
                  value={this.state.title}
                  placeholder="Note Title"
                />
              </label>

              <label>
                <input
                  type="text"
                  onChange={this.handleNewInput}
                  name="content"
                  value={this.state.content}
                  placeholder="Note Content"
                />
              </label>

              <Link to="/">
                <button
                  type="button"
                  onClick={() =>
                    this.updateNote(this.props.location.state.note)
                  }>Edit</button>
              </Link>
            </form>
      </div>
    );
  }
}