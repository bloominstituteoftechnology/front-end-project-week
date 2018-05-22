import React from 'react';
import './noteform.css';
import { Form, FormGroup, Input} from 'reactstrap';


const NoteForm = (props) => {
  return (
    <Form>
      <h5>{props.topText}</h5>
      <FormGroup>
        <Input name="title" id="title-input" placeholder="Note Title" />
      </FormGroup>
      <FormGroup>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
    </Form>
  );
}

export default NoteForm;
