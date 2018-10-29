import React,{ Component } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class NoteText extends { Component } {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </Form>
    );
  }
};
export default NoteText;