import React from 'react';
import {Container, Button, Form, FormGroup, FormText, Input, Label} from "reactstrap"

const Edit = () => {
  return(
    <Container>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Edit Note</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Note title" />
      </FormGroup>
      <FormGroup>
        <Input type="textarea" name="text" id="exampleText" placeholder="Note Content" />
     </FormGroup>
     <Button className="li"> Save</Button>
   </Form>
   </Container>
  )
}

export default Edit
