import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { submitNewNote } from "../actions/action";
import { connect } from "react-redux";

class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
  }
  inputNewNote = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submitNewNote = event => {
    event.preventDefault();
    let newComment = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.submitNewNote(newComment);
  };
  render() {
    return (
      <div className="createNote">
        <h4>Create New Note: </h4>
        <Form>
          <FormGroup>
            <Input
              onChange={this.inputNewNote}
              type="text"
              name="title"
              className="createNoteTitle"
              placeholder="Note Title"
            />
            <textarea
              onChange={this.inputNewNote}
              type="text"
              name="body"
              className="createNoteComment"
              placeholder="Note Content"
            />
          </FormGroup>
          <Button onClick={this.submitNewNote}>Save</Button>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { submitNewNote }
)(Create);
