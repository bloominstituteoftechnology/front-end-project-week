import React from "react";

export default class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      newText: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    let note = this.props.notes.find(
      note => `${note.id}` === this.props.match.params.id
    );
    this.props.editNote(this.state.newTitle, this.state.newText, note.id);
    this.props.history.push(`/note/${note.id}`);
  };
  render() {
    let note = this.props.notes.find(
      note => `${note.id}` === this.props.match.params.id
    );
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="newTitle"
          value={this.state.newTitle}
          onChange={this.inputHandler}
          placeholder={note.title}
        />
        <textarea
          cols="60"
          rows="30"
          name="newText"
          value={this.state.newText}
          onChange={this.inputHandler}
          placeholder={note.text}
        />
        <button type="submit">Update</button>
      </form>
    );
  }
}
