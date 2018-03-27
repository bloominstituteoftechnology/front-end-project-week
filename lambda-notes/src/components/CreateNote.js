import React, { Component } from 'react';
import './CreateNote.css';
import { Form, FormGroup, Input, Button } from 'reactstrap';

export default class CreateNote extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ title: '', content: '' });
  };

  render() {
    return (
      <div>
        <h4 className="heading">Create New Note:</h4>
        <Form className="form">
          <FormGroup className="form-group">
            <Input
              className="input-title"
              type="text"
              name="title"
              placeholder="Note Title"
              onChange={this.handleChange}
              value={this.state.name}
            />{' '}
            <Input
              className="input-content"
              type="textarea"
              name="content"
              placeholder="Note Content"
              onChange={this.handleChange}
              value={this.state.name}
            />{' '}
          </FormGroup>
          <Button
            className="btn float-left save-button"
            onClick={this.handleSubmit}
          >
            Save
          </Button>
        </Form>
      </div>
    );
  }
}
