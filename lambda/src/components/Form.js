import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NoteForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Create Note:</Label>
          <Input type="text" name="text" id="text" placeholder="Note Title" />
        </FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
          <Link to="/"> <Button>Save</Button></Link>
      </Form>
    );
  }
}

export default NoteForm;