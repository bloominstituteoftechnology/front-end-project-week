import React from 'react';
import { Button, Input, Form, FormGroup } from 'reactstrap';

const NoteForm = props => (
  <Form onSubmit={props.onSubmit} className="note-form">
    <FormGroup>
      <Input
        name="title"
        placeholder="Note Title"
        onChange={props.onChange}
        value={props.title}
        pattern="^[\s\S]{1,50}$"
        title="Title should only contain up to 50 letters"
        autoComplete="off"
      />
    </FormGroup>
    <FormGroup>
      <Input
        type="textarea"
        name="text"
        placeholder="Note Content"
        onChange={props.onChange}
        value={props.text}
      />
    </FormGroup>
    <Button color="info">{props.formText}</Button>
  </Form>
);

export default NoteForm;
