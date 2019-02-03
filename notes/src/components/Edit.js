import React from 'react';
import {Container, Button, Form, FormGroup, FormText, Input, Label} from "reactstrap"
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'

const Edit = (props) => {
  const note = props.notes.find((each) => {
    return each._id == props.match.params.id
  })
  // const { from} = props.location.state || '/notes';
  // const { fireRedirect } =
  console.log(props.location)
  return(
    <Container>
    <Form onSubmit={(event) => props.handleEdit(event, note._id, props.history.push)}>
      <FormGroup>
        <Label for="exampleEmail">Edit Note</Label>
        <Input onChange={props.handleChange} type="text" name="title" id="exampleEmail" placeholder="Note title" value={props.title} />
      </FormGroup>
      <FormGroup>
        <Input onChange={props.handleChange} type="textarea" name="textBody" id="exampleText" placeholder="Note Content" value={props.textBody} />
     </FormGroup>

     <Button onSubmit={(event) => props.handleEdit(event, note._id)} className="li"> Save</Button>

   </Form>
   </Container>
  )
}

export default Edit
