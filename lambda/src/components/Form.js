import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

//importing Form CSS
import './Form.css';

class NoteForm extends Component {
  render() {
    return (
      <Container className="container">
      <Form>
        <FormGroup>
          <Label>Create Note:</Label>
          <Input type="text" name="text" id="text" placeholder="Note Title" />
        </FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
          <Link to="/"> <Button color="info">Save</Button></Link>
      </Form>
      </Container>
    );
  }
}

export default NoteForm;