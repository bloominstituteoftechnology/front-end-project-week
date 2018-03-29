import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import "./CreateNew.css";

class CreateNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  newTitle = event => {
    this.setState({ title: event.target.value });
  };

  newContent = event => {
    this.setState({ content: event.target.value });
  };

  submitNote (event) {
    event.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content
    };
    console.log('I am in here submitNote', newNote)
    this.props.createNote(newNote);
    console.log('I am in back!!!!!', newNote)
    this.props.history.push("/" )
  };

  render() {
    return (
      <Form onSubmit={this.submitNote.bind(this)}>
        <FormGroup>
          <Label>Create New Note:</Label>
          <Input
            onChange={this.newTitle}
            type="text"
            name="Note"
            id="noteId"
            placeholder="Note Title"
          />
          <Input
            onChange={this.newContent}
            type="textarea"
            name="text"
            id="Text"
            placeholder="Note Content"
          />
        </FormGroup>
        <Button type="submit">
          Save
       </Button>
      </Form>
    );
  }
}
export default withRouter(CreateNew) ;