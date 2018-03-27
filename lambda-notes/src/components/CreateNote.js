import React, { Component } from 'react';
import './CreateNote.css';
import { Form, FormGroup, Input, Button } from 'reactstrap';

export default class CreateNote extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ title: '', content: '' });
  };

  render() {
    return (
      <div>
        <h4>Create New Note:</h4>
        <Form>
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
              type="text"
              name="content"
              placeholder="Note Content"
              onChange={this.handleChange}
              value={this.state.name}
            />{' '}
            <Button className="btn save-button" onClick={this.handleSubmit}>
              Save
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
