import React, { Component } from 'react';

import { Form, Input, Row, Col, Button } from 'reactstrap';

export default class CreateNote extends Component {

  render() {
    return (
      <div>
        <br /><br />
        <h3>Create New Note:</h3><br />
        <div className="create-note">
          <Form>
            <row>
              <Col className="col-8 mb-3">
                <Input type="text" name="title" placeholder="Note Title" />
              </Col>
            </row>
            <row>
              <Col className="col mb-3">
                <Input type="textarea" name="content" placeholder="Note Content" />
              </Col>
            </row>
            <row>
              <Col>
                <Button className="btn-info">Save</Button>
              </Col>
            </row>
          </Form>
        </div>
      </div>
    );
  }

}
