import React from "react";
import "../App.css";
class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ``,
      textBody: ``
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    if (this.props.edit) {
      this.props.editNote(this.props.match.params.noteId, this.state);
    } else {
      this.props.addNote(this.state);
    }
    this.props.getNotes();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="form">
        <h2>{this.props.edit ? "Edit Note:" : "Create New Note:"}</h2>
        <form className="form-container" onSubmit={this.submitHandler}>
          <input
            className="input-title"
            onChange={this.changeHandler}
            type=""
            autocomplete="off"
            name="title"
            value={this.state.title}
            placeholder={
              this.props.edit ? `${this.props.note.title}` : "Note Title"
            }
          />
          <textarea
            className="input-content"
            onChange={this.changeHandler}
            name="textBody"
            value={this.state.textBody}
            placeholder={
              this.props.edit ? `${this.props.note.textBody}` : "Note Content"
            }
          />
          <div className="baseline" />
          <button className="md-button form-button">
            {this.props.edit ? "Update" : "Save"}
          </button>
        </form>
      </div>
    );
  }
}

export default AddNote;
