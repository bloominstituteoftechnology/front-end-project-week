import React from "react";

class NewNote extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      newNote: { title: "", content: "", id: 0 }
    };
  }

  handleInput(e) {
    this.setState(...this.state, { [e.target.name]: e.target.value });
  }

  addNewNote(e) {
    e.preventDefault();
    const note = {
      title: this.state.title,
      content: this.state.content
    };
    this.props.addNewNote(note);
    this.setState(...this.state, { title: "", content: "" });
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
            this.addNewNote(e);
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
