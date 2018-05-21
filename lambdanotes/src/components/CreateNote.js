import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";

import "./CreateNote.css";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditNote = () => {
    const editedNote = {
      title: this.state.title,
      content: this.state.content
    };
    this.props.editNote(editedNote);
    this.setState({
      editing: !this.state.editing
    });
  };

  handleCreateNote = () => {
    const newNote = {
      title: this.state.title,
      content: this.state.content
    };
    if (this.state.title === "") {
      newNote.title = "Untitled";
    }
    this.props.addNote(newNote);
    this.setState({
      title: "",
      content: ""
    });
  };

  render() {
    return (
      <Form>
        <h3>Create New Note:</h3>
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
        <Link to="/">
          <Button color="info" onClick={this.handleCreateNote}>
            <b>Create Note</b>
          </Button>
        </Link>
      </Form>
    );
  }
}

export default CreateNote;
