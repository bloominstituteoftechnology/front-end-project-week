import React from 'react';
import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap"

const Modal = () => {
  return(
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Title</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
     </FormGroup>
   </Form>
  )
}

export default Modal
