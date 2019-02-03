import React from 'react';
import {Container, Button, Form, FormGroup, Input, Label} from "reactstrap"

const NewNote = (props) => {

  return(
    <Container>
    <Form onSubmit = {(event) => props.addNote( event, props.history.push)}>
      <FormGroup>
        <Label for="exampleEmail">Create New Note</Label>
        <Input onChange={props.handleChange} value={props.title}  name="title" placeholder="Note title" type="text" />
      </FormGroup>
      <FormGroup>
        <Input onChange={props.handleChange} value={props.textBody}  name="textBody"  placeholder="Note Content" type="textarea" />
     </FormGroup>
      <Button className="li"> Save</Button>
   </Form>
   </Container>
  )
}

export default NewNote
