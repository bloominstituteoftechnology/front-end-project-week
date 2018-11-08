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
              <Input 
                className='titleInput'
                type="title" 
                name="title" 
                id="exampleTitle" 
                placeholder="Note Title"
                onChange={props.handleInputChange}
                value={props.note.title} />
          </FormGroup>
          <FormGroup row>
              <Input 
                className='textBodyInput'
                type="textarea" 
                name="textBody" 
                id="exampleText" 
                placeholder="Note Content"
                onChange={props.handleInputChange}
                value={props.note.textBody} />
          </FormGroup>
          <Button className='formButton'type="submit">
            {props.isEditing ? "Update" : "Save"}
          </Button>
        </Form>
      </div>
    );
  }


export default NewNote;