import React, { Component } from "react";
import { Link } from "react-router-dom";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      notes: this.props.notes,
      newNote: false,
      note: null,
      title: "",
      content: ""
    };
  }

  componentDidMount = () => {
    if (
      this.state.id ===
      this.state.notes[this.state.notes.length - 1].id + 1
    ) {
      this.setState({ newNote: true });
    } else if (
      this.state.notes !== null &&
      this.state.notes !== undefined &&
      this.state.notes[this.state.id - 1] &&
      this.state.id > 0
    ) {
      this.displayNote();
    }
  };

  displayNote = () => {
    const displayedNote = this.state.notes.filter(
      (note, index) => this.state.id === note.id
    );
    this.setState({
      note: displayedNote[0],
      newNote: false
    });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateNote = () => {
    const newNote = {
      id: this.state.id,
      title: this.state.title,
      content: this.state.content
    };
    if (this.state.title !== "" && this.state.content !== "") {
      this.setState({
        title: "",
        content: "",
        newNote: false
      });
      this.props.addNote(newNote);
    } else {
      alert("Fill out all inputs to submit");
    }
  };

  render() {
    const note = this.state.note;
    const id = this.state.id;
    if (this.state.newNote === false && this.state.note !== null) {
      return (
        <div className="mt-5">
          {this.state.note.title}
          <br />
          <br />
          {this.state.note.content}
        </div>
      );
    } else if (this.state.newNote === true) {
      return (
        <div className="mt-5">
          Temporary Input Form
          <br />
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Add title..."
            onChange={this.handleInput}
          />
          <br />
          <input
            type="text"
            name="content"
            value={this.state.content}
            placeholder="Add content..."
            onChange={this.handleInput}
          />
          <br />
          <Link to={"/"}>
            <button onClick={this.handleCreateNote}>Create Note</button>
          </Link>
        </div>
      );
    } else return <div className="mt-5">There is no note with that id!</div>;
  }
}

export default NoteView;
