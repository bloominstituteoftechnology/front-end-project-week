import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

import "./NoteView.css";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      id: parseInt(this.props.match.params.id, 10),
      title: "",
      content: "",
      editing: false
    };
  }

  componentDidMount = () => {
    if (
      this.props.notes !== null &&
      this.props.notes !== undefined &&
      this.state.editing === false
    ) {
      this.displayNote();
    }
  };

  displayNote = () => {
    const displayedNote = this.props.notes.filter(
      (note, index) => this.state.id === note.id
    );
    if (displayedNote[0]) {
      this.setState({
        note: displayedNote[0],
        title: displayedNote[0].title,
        content: displayedNote[0].content
      });
    }
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggle = () => {
    this.setState({
      editing: !this.state.editing
    });
  };

  handleEditNote = () => {
    if (this.state.title !== "" && this.state.content !== "") {
      const editedNote = {
        id: this.state.id,
        title: this.state.title,
        content: this.state.content
      };
      this.props.editNote(editedNote);
      this.setState({
        editing: !this.state.editing
      });
    } else alert("Fill out all inputs to submit");
  };

  handleDeleteNote = () => {
    this.props.deleteNote(this.state.id);
    this.setState({
      editing: false,
      note: null
    });
  };

  render() {
    if (this.state.editing === false && this.state.note !== null) {
      return (
        <div className="note-view">
          <div className="modify-links">
            <b onClick={this.toggle}>edit</b>
            <b onClick={this.handleDeleteNote}>delete</b>
          </div>
          <h3 className="note-title">{this.state.title}</h3>
          <div className="note-content">{this.state.content}</div>
        </div>
      );
    } else if (this.state.editing === true) {
      return (
        <Form>
          <h3>Edit Note:</h3>
          <FormGroup>
            <Input
              type="textarea"
              name="title"
              placeholder="Note Title"
              value={this.state.title}
              onChange={this.handleInput}
              className="title-input"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              name="content"
              placeholder="Note Content"
              value={this.state.content}
              onChange={this.handleInput}
              className="content-input"
            />
          </FormGroup>
          <Button color="info" onClick={this.handleEditNote}>
            <b>Update</b>
          </Button>
        </Form>
      );
    } else return <div className="mt-5">There is no note with that id!</div>;
  }
}

export default NoteView;
