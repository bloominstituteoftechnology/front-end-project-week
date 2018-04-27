import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { Input, Row, Col, Button } from 'reactstrap';

class CreateNote extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      content: ''
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value}); 
  }

  handleSubmit = () => {
    this.props.addNewNote(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div className="container create-note">
          <Row>
            <Col className="col-4 mb-3">
              <br /><br />
              <h3>Create New Note:</h3><br />
              <Input onChange={this.handleInputChange} type="text" name="title" value={this.state.title} placeholder="Note Title" />
            </Col>
          </Row>
          <Row>
            <Col className="col-10 mb-3">
              <Input onChange={this.handleInputChange} type="textarea" name="content" value={this.state.content} placeholder="Note Content" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={this.handleSubmit} className="btn-info">Save</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default withRouter(CreateNote);
