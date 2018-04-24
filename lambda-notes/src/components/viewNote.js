import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { Form, Input, Row, Col, Button } from 'reactstrap';

class ViewNote extends Component {

  handleDelete = () => {
    this.props.deleteNote(this.props.selectedNote.title);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="col-3 ml-auto">
            <Button className="mr-2" size="sm">Edit</Button> 
            <Button onClick={this.handleDelete} size="sm">Delete</Button>
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

export default withRouter(ViewNote);
