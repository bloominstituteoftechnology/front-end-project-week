import React from 'react';
import {Container, Button, Form, FormGroup, FormText, Input, Label} from "reactstrap"

const Modal = () => {
  return(
    <Container>
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
   </Container>
  )
}

export default Modal
