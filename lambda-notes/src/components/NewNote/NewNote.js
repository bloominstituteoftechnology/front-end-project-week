import React from "react";
import DeleteNote from "../NoteView/DeleteNote";
import "./NewNote.css";

class NewNote extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      newNote: { title: "", content: "" }
    };
  }
  componentDidMount() {
    console.log(this.props);
    if (this.props.isUpdatingNote) {
      this.setState(...this.state, {
        title: this.props.note.title,
        content: this.props.note.content
      });
    }
  }

  handleInput(e) {
    this.setState(...this.state, { [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = {
      title: this.state.title,
      content: this.state.content
    };
    if (this.props.isUpdatingNote) {
      note.id = this.props.note.id;
    }

    if (this.props.isUpdatingNote) {
      console.log("to update: ");
      this.props.updateNote(note);
      this.props.history.push("/");
    } else {
      console.log("to add new note");
      this.props.addNewNote(note);
      this.setState(...this.state, { title: "", content: "" });
    }
  }

  render() {
    return (
      <div className="notes-container">
        <h1>{this.props.isUpdatingNote ? `Edit Note:` : `Create New Note:`}</h1>
        <form className="note-form">
          <input
            className="note-title"
            type="text"
            onChange={e => this.handleInput(e)}
            value={this.state.title}
            name="title"
            placeholder="Note title"
            autoComplete="off"
          />
          <textarea
            className="note-content"
            type="text"
            onChange={e => this.handleInput(e)}
            value={this.state.content}
            name="content"
            placeholder="Note content"
            autoComplete="off"
          />
          <button
            onClick={e => {
              this.handleSubmit(e);
            }}
            className="button submit"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
export default NewNote;
