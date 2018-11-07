import React from 'react';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';


const NewNote = (props) => {
  
    return (
      <Form onSubmit={props.addNote}>
        <FormGroup row>
          <Col sm={10}>
            <Input 
              type="title" 
              name="title" 
              id="exampleTitle" 
              placeholder="Note Title"
              onChange={props.handleInputChange}
              value={props.newNote.title} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Input 
              type="textarea" 
              name="textBody" 
              id="exampleText" 
              placeholder="Note Content"
              onChange={props.handleInputChange}
              value={props.newNote.textBody} />
          </Col>
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    );
  }


export default NewNote;