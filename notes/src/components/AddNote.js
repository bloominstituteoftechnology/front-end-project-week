import React from "react";

class AddNote extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: "",
      title: "",
      textBody: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <h3>Create a New Note</h3>
        <input name="tags">Tags</input>
        <input name="title" required>
          Note Title
        </input>
        <input name="textBody" required>
          Note Text
        </input>
      </form>
    );
  }
}

export default AddNote;
