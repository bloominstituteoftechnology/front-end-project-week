import React from 'react';
import {Container, Button, Form, FormGroup, FormText, Input, Label} from "reactstrap"

const Modal = () => {
  return(
    <Container>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Create New Note</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Note title" />
      </FormGroup>
      <FormGroup>
        <Input type="textarea" name="text" id="exampleText" placeholder="Note Content" />
     </FormGroup>
   </Form>
   </Container>
  )
}

export default Modal
