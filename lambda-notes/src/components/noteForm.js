import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Label, FormGroup, Input, Button, Container } from "reactstrap";


export default class NoteForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="create-note">Create Note</Label>
          <Input type="text" name="Create Note" id="createNote" placeholder="Note Title Here" />
        </FormGroup>
        <FormGroup>
          <Label for="note-text">Note Text</Label>
          <Input type="textarea" name="text" id="Note Text" placeholder="Write your note here."  />
        </FormGroup>
      </Form>
    );
  }
}