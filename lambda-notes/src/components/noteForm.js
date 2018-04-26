import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Label, FormGroup, Input, Button, Container } from "reactstrap";


export default class NoteForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
      </Form>
    );
  }
}