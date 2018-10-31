import React, { Component } from "react";
import axios from "axios";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  addNote = event => {
    event.preventDefault();
    if (this.state.title.length < 1 || this.state.textBody.length < 1) {
      alert("Please fill out all fields!");
    } else {
      axios
        .post("https://fe-notes.herokuapp.com/note/create", this.state)
        .then(() =>
          this.setState({
            title: "",
            textBody: ""
          })
        )
        .catch(error => console.log(error));
      this.props.history.push("/");
      window.scrollTo(0, 0);
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="NoteForm">
        <form onSubmit={this.addNote}>
          <input
            onChange={this.handleInputChange}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Note Content"
            value={this.state.textBody}
            name="textBody"
          />

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
