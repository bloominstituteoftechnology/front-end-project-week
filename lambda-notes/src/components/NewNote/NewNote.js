import React from "react";
import DeleteNote from "../NoteView/DeleteNote";

class NewNote extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      newNote: { title: "", content: "", id: 0 }
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
      content: this.state.content,
      id: this.props.isUpdatingNote ? this.props.note.id : null
    };

    if (this.props.isUpdatingNote) {
      console.log("to update: ");
      this.props.updateNote(note);
    } else {
      console.log("to add new note");
      this.props.addNewNote(note);
      this.setState(...this.state, { title: "", content: "" });
    }
  }

  render() {
    {
      console.log(this.state);
    }
    return (
      <form>
        <input
          type="text"
          onChange={e => this.handleInput(e)}
          value={this.state.title}
          name="title"
          placeholder="Note title"
        />
        <input
          type="text"
          onChange={e => this.handleInput(e)}
          value={this.state.content}
          name="content"
          placeholder="Note content"
        />
        <button
          onClick={e => {
            this.handleSubmit(e);
          }}
          className="button"
        >
          Save
        </button>
      </form>
    );
  }
}
export default NewNote;
