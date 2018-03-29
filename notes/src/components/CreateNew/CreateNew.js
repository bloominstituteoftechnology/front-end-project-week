import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

import Sidebar from "../Sidebar/Sidebar.js";
import './CreateNew.css';

class CreateNew extends Component {
  render() {
    return(
      <Container>
        <Form>
          <Row>
            <Col className='sideCol'>
              <Sidebar />
            </Col>
            <Col className="input">
              <div className='noteViewText'>
                <h2> Create New Note: </h2>
              </div>
              <FormGroup>
                <Input type="titlearea" name="title" id="titleHere" placeholder="Note Title" className="titleInput" />
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="text" id="textHere" placeholder="Note Content" className="noteInput"/>
              </FormGroup>
              <Button className="saveButton">Save</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default CreateNew;