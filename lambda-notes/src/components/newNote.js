import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import SideNav from './SideNav.js'; 
import newNote from './newNote.css'

const NewNote = (props) => {
  return (
    <div>
      <SideNav />
        <h2 className="header-Notes">Create New Note:</h2>        
        <Form className="form">
          <FormGroup row>
            {/* <Label for="exampleEmail" sm={2}>Email</Label> */}
            <Col sm={7}>
              <Input type="title" className="noteTitle" placeholder="Note Title" />
            </Col>
          </FormGroup>
          <FormGroup row className="noteContent">
          {/* <Label for="exampleText" sm={2}>Text Area</Label> */}
          <Col sm={9}>
            <Input type="textarea" className="text" placeholder="Note Content"/>
          </Col>
          </FormGroup>
        </Form>
        <button className="button3">Save</button>
    </div>
  );
}

export default NewNote;