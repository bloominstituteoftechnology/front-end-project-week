import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

class Create extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h4>Create New Note: </h4>
        <Form>
          <FormGroup>
            <Input
              type="text"
              name="note_title"
              className="createNoteTitle"
              placeholder="Note Title"
            />
            <Input
              type="text"
              name="note_comment"
              className="createNoteComment"
              placeholder="Note Comment"
            />
          </FormGroup>
        </Form>
        <Button>Save</Button>
      </div>
    );
  }
}

export default Create;
