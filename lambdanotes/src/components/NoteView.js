import React, { Component } from "react";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      note: null,
      title: "",
      content: ""
    };
  }

  componentDidMount = () => {
    if (
      this.props.notes !== null &&
      this.props.notes !== undefined &&
      this.props.notes[this.props.match.params.id - 1] &&
      this.state.id > 0
    ) {
      this.displayNote();
    }
  };

  displayNote = () => {
    const displayedNote = this.props.notes.filter(
      (note, index) => this.state.id === note.id
    );
    this.setState({
      note: displayedNote[0]
    });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateNote = () => {
    const newNote = {
      id: parseInt(this.props.match.params.id),
      title: this.state.title,
      content: this.state.content
    };
    if (this.state.title !== "" && this.state.content !== "") {
      this.props.addNote(newNote);
      this.setState({
        title: "",
        content: "",
        note: newNote,
        id: parseInt(this.props.match.params.id)
      });
    } else {
      alert("Fill out all inputs to submit");
    }
  };

  render() {
    const note = this.state.note;
    const id = parseInt(this.props.match.params.id);
    if (this.state.note !== null && this.state.note.id === id) {
      return (
        <div className="mt-5">
          {this.state.note.title}
          <br />
          <br />
          {this.state.note.content}
        </div>
      );
    } else if (id === this.props.notes[this.props.notes.length - 1].id + 1) {
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
          <button onClick={this.handleCreateNote}>Create Note</button>
        </div>
      );
    } else return <div className="mt-5">There is no note with that id!</div>;
  }
}

export default NoteView;
