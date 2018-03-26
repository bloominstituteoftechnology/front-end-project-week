import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class CreateNote extends Component {
  render() {
    return (
      <div>
        <h1>Create New Note: </h1>
        <Form>
          <FormGroup>
            <Input name="title" placeholder="Note Title"/>
            <Input type="textarea" name="text" placeholder="Note Content"/>
            <Button>Save</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

//need action
//need local state


export default CreateNote;