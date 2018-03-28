import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';
import './CreateNew.css';

export default class CreateNew extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Create New Note:</Label>
          <Input type="text" name="Note" id="noteId" placeholder="Note Title" />
          <Input type="textarea" name="text" id="Text" placeholder="Note Content" />
        </FormGroup>
        <Button>
         <Link to="/ListView" className="LinkClass">Save </Link>
        </Button>
      </Form>
      
    );
  }
}