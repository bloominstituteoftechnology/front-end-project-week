import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class Example extends React.Component {
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
}
