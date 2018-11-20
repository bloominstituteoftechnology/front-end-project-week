import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class CreateNote extends Component {


  render() {
    return (
      <form>
        <FormGroup>
          <Label for="New Note">Create New Note</Label>
          <Input type="text" name="Title" placeholder="Note Title" />
          <Input type="textarea" name="Note Content" placeholder="Note Content" />
        </FormGroup>
      </form>
    );
  }
}
