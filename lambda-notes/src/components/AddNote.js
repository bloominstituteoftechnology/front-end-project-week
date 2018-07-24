import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  addNote = event => {
    event.preventDefault();

    const addNote = {
      title: this.state.title,
      textBody: this.state.textBody
    };

    axios
      .post("https://killer-notes.herokuapp.com/note/create", addNote)
      .then(response => {
        this.setState({ title: "", textBody: "" });
        this.setState(response.data);
      })
      .then(response => {
        this.props.history.push("/");
      })
      .catch(error => console.log(error));

    this.setState({
      title: "",
      textBody: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Add Note</h1>
        <form onSubmit={this.addNote}>
          <label htmlFor="title">
            <h3>Title</h3>
            <input
              onChange={this.handleInputChange}
              id="title"
              type="text"
              name="title"
            />
          </label>
          <label htmlFor="textBody">
            <h3>Text</h3>
            <textarea
              onChange={this.handleInputChange}
              id="textBody"
              rows="20"
              cols="100"
              name="textBody"
            />
          </label>
          <button>ADD NOTE</button>
        </form>
      </div>
    );
  }
}

export default AddNote;
