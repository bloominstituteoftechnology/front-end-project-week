import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Sidebar from "../Sidebar/Sidebar.js";

class CreateNew extends Component {
  render() {
    return(
      <Form>
        <Sidebar />
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