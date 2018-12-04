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

  // addNote = e => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   console.log(this.props.addNote);
  //   this.props.addNote(this.state);
  //   this.setState({
  //     tags: "",
  //     title: "",
  //     textBody: ""
  //   });
  // };

  submitHandler = e => {
    e.preventDefault();
    let id = this.props.match.params.id;
    if (this.props.edit) {
      this.props.editNote(this.state, id);
    } else {
      this.props.addNote(this.state);
    }
    this.props.history.push("/notes");
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h3>{this.props.edit ? "Edit Note" : "Create New Note"}</h3>
        <label>
          Tags:
          <input name="tags" onChange={this.handleChange} />
        </label>
        <label>
          Title:
          <input
            name="title"
            onChange={this.handleChange}
            required={!this.props.edit}
          />
        </label>
        <label>
          Note:
          <input
            type="textarea"
            name="textBody"
            onChange={this.handleChange}
            required={!this.props.edit}
          />
        </label>
        <button>{this.props.edit ? "Edit Note" : "Add Note"}</button>
      </form>
    );
  }
}

export default NoteForm;
