import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateNote = event => {
    event.preventDefault();

    let updatedNote = {
      id: this.props.id,
      title: this.state.title,
      content: this.state.content
    };
    this.props.updateNote(updatedNote);
    this.props.onCancel();
  };

  render() {
    return (
      <Form onSubmit={this.updateNote} className="note-form">
        <FormGroup>
          <Input
            type="text"
            placeholder="Note Title"
            name="title"
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            placeholder="Note Content"
            name="content"
            id="content"
            onChange={this.handleChange}
            value={this.state.content}
            required
          />
        </FormGroup>
        {/* <FormGroup>
            <Input type="text" placeholder="Note Tags" name="tags" id="tags" onChange={this.handleChange} value={this.state.tags} required></Input>
        </FormGroup> */}
        <Button className="teal-button">Update</Button>
        <Button type="button" onClick={this.props.onCancel} color="danger">
          Cancel
        </Button>
      </Form>
    );
  }
}

export default EditNote;
