import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Label, FormGroup, Input, Button, Container } from "reactstrap";

import { addNote, editNote } from "../actions";


export default class NoteForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="create-note">Create New Note</Label>
          <Input type="text" name="Create Note" id="createNote" placeholder="Note Title" />
        </FormGroup>
        <FormGroup>
          <Input type="textarea" name="text" id="Note Text" placeholder="Note Content"  />
        </FormGroup>
      </Form>
    );
  }
}