import React from 'react';
import { Col, Form, FormGroup, Input } from 'reactstrap';

import './CreateNewView.css';

const CreateNewView = (props) => {
  return (
    <div>
      <h2 className="header-Notes">Create New Note:</h2>        
        <Form className="form">
          <FormGroup row> 
            <Col sm={20}>
              <Input type="title" className="noteTitle" placeholder="Note Title" />
            </Col>
          </FormGroup>
          <FormGroup row className="noteContent">          
            <Col sm={45}>
              <Input type="textarea" className="text" placeholder="Note Content" />
            </Col>
          </FormGroup>
        </Form>
        <button className="button3">Save</button>
    </div>
  );
}

export default CreateNewView;