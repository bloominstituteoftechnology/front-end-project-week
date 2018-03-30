import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import notestyles from './notestyles.css';

const NoteForm = () => {
  return (
    <Form>
      <FormGroup>
        <h4>Create New Note:</h4>
        <Input type="text" placeholder="Note Title" />
        <Input
          type="textarea"
          placeholder="Note Content"
          className="text-area"
        />
        <Link to="/">
          <button className="note-button">Save</button>
        </Link>
      </FormGroup>
    </Form>
  );
};

export default NoteForm;
