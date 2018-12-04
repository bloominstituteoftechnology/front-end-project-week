import React from "react";

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: "",
      title: "",
      textBody: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNote = e => {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props.addNote);
    this.props.addNote(this.state);
    this.setState({
      tags: "",
      title: "",
      textBody: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.addNote}>
        <h3>Create a New Note</h3>
        <label>
          Tags:
          <input name="tags" onChange={this.handleChange} />
        </label>
        <label>
          Title:
          <input name="title" onChange={this.handleChange} required />
        </label>
        <label>
          Note:
          <input
            type="textarea"
            name="textBody"
            onChange={this.handleChange}
            required
          />
        </label>
        <button>Add Note</button>
      </form>
    );
  }
}

export default NoteForm;
