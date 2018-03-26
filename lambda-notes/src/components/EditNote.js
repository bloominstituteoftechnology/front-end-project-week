import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/CreateNote.css';

class EditNote extends Component {
  render() {
    return (
      <div className="EditNote">
        <div className="LeftSide">
          <h1 className="LambdaNotes">Lambda Notes</h1>
          <Link to ='/'><Button className="LeftSideButtons">
            View Your Notes
          </Button></Link>
          <Button className="LeftSideButtons">+ Create New Note</Button>
        </div>

        <div className="RightSide">
          <h4 className="CreateNewNote">Edit Note:</h4>
          <div className="FormDiv">
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  name="noteTitle"
                  id="noteTitle"
                  placeholder="Note Title"
                />
              </FormGroup>

              <FormGroup>
                <Input
                  type="textarea"
                  rows="14"
                  name="noteContent"
                  id="noteContent"
                  placeholder="Note Content"
                />
              </FormGroup>

              <Button className="SubmitButton float-left">Update</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNote;
