import React, { Component } from "react";
import axios from "axios";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleSubmitNote = event => {
    event.preventDefault();
    axios
      .post("https://lambdanotesserver.herokuapp.com/notes", this.state)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    this.setState({ title: "", content: "" });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="noteForm">
        <h1>Create New Note:</h1>
        <form onSubmit={this.handleSubmitNote}>
          <input
            onChange={this.changeHandler}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.changeHandler}
            placeholder="Note Content"
            value={this.state.content}
            name="content"
          />

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
