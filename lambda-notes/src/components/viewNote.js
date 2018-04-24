import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { Form, Input, Row, Col, Button } from 'reactstrap';

class CreateNote extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col className="col-3 ml-auto">
            Edit Delete
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h3>{this.props.selectedNote.title}</h3><br />
            <p>{this.props.selectedNote.content}</p>
          </Col>
        </Row>
      </div>
    );
  }

}

export default withRouter(CreateNote);
