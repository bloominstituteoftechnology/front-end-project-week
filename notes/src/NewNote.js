import React from 'react';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';
import './NewNote.css'


const NewNote = (props) => {
  const handleClick = event => {
    event.preventDefault();
    if (props.isEditing) {
      props.editNote();
    } else {
      props.addNote();
    }
    props.history.push('/notes');
  };
  return (
    <div className='noteFormPage'>
      <h2>{props.isEditing ? "Edit note:" : "Create New Note:"}</h2>
        <Form onSubmit={handleClick}>
          <FormGroup row>
            <Col sm={{ size: 12, order: 2, offset: 1 }}>
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
            <Col sm={{size: 50, order: 2, offset: 1 }}>
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