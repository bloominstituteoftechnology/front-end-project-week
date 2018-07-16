import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

const CreateNewNoteForm = props => {
  return (
    <Form id="form">
      <FormGroup>
        <Input
          onChange={props.handleInputChange}
          type="text"
          name="title"
          value={props.value}
          placeholder="Note Title"
        />
      </FormGroup>

      <FormGroup>
        <Input
          onChange={props.handleInputChange}
          type="textarea"
          name="content"
          value={props.value}
          placeholder="Note Content"
        />
      </FormGroup>

      <Button onClick={props.handleSubmit}>Save</Button>
    </Form>
  );
};

export default CreateNewNoteForm;
