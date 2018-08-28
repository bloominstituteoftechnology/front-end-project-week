import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input } from "reactstrap";

class EditNote extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      header: "",
      content: ""
    };
  }

//build out the edit form


  handleINputChage = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleNoteSubmit = event => {
    event.preventDefault();
    const newNote = {
      header: this.state.header,
      content: this.state.content
    };
  };

  render() {
    return (
      <div>
        <h1>Create New Note:</h1>
        <FormGroup>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            placeholder="Note Title"
          />
        </FormGroup>
        <FormGroup>
          <Input
            className="note-content-input"
            type="textarea"
            name="text"
            id="exampleText"
            placeholder="Note Content"
          />
        </FormGroup>
        <Link to={"/"}>
          <button>Save</button>
        </Link>
      </div>
    );
  }
}

export default NoteForm;