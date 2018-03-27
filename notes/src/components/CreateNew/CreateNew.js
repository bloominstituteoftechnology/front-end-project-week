import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateNew extends Component {
  render() {
    return(
      <Form>
        <FormGroup>
          <Label for="titleArea">Title</Label>
          <Input type="titlearea" name="title" id="titleHere" placeholder="Title Here" />
        </FormGroup>

        <FormGroup>
          <Label for="textArea">Text Area</Label>
          <Input type="textarea" name="text" id="textHere" placeholder="Text Here" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default CreateNew;