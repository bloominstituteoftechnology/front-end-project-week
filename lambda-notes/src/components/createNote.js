import React, { Component } from 'react';

import { Form, Input, Row, Col, Button } from 'reactstrap';

export default class CreateNote extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      content: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value}); 
  }

  handleSubmit = () => {
    this.props.updateNewCard(this.state);
  }

  render() {
    return (
      <div>
        <br /><br />
        <h3>Create New Note:</h3><br />
        <div className="create-note">
          <Form>
            <row>
              <Col className="col-8 mb-3">
                <Input onChange={this.handleInputChange} type="text" name="title" value={this.state.title} placeholder="Note Title" />
              </Col>
            </row>
            <row>
              <Col className="col mb-3">
                <Input onChange={this.handleInputChange} type="textarea" name="content" value={this.state.content} placeholder="Note Content" />
              </Col>
            </row>
            <row>
              <Col>
                <Button onClick={this.handleSubmit} className="btn-info">Save</Button>
              </Col>
            </row>
          </Form>
        </div>
      </div>
    );
  }

}
