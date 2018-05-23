import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './CreateNewView.css';

class EditNote extends Component {
        render() {
            return (
              <div className="main-div">
                <div>
                  <h2>Edit Note:</h2>
                </div>
                <div>
                  <Form>
                    <FormGroup>
                      <Label for="noteTitle">Note Title</Label>
                      <Input type="text" name="title" id="noteTitle" placeholder="Enter title" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="noteContent">Note Content</Label>
                      <Input type="text" name="content" id="noteContent" />
                    </FormGroup>
                    <Button>Save</Button>
                  </Form>
                </div>
              </div>
            );
        }
      }

export default EditNote;