import React from 'react';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';


const NewNote = (props) => {
  const handleClick = event => {
    event.preventDefault();
    if (props.isEditing) {
      props.editNote();
    } else {
      props.addNote();
    }
  };
  return (
    <div>
      <h2>{props.isEditing ? "Edit note:" : "Create New Note:"}</h2>
        <Form onSubmit={handleClick}>
          <FormGroup row>
            <Col sm={10}>
              <Input 
                type="title" 
                name="title" 
                id="exampleTitle" 
                placeholder="Note Title"
                onChange={props.handleInputChange}
                value={props.note.title} />
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
                value={props.note.textBody} />
            </Col>
          </FormGroup>
          <Button type="submit">
            {props.isEditing ? "Update" : "Save"}
          </Button>
        </Form>
      </div>
    );
  }


export default NewNote;