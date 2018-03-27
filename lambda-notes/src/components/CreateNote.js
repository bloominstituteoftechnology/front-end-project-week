import React, { Component } from 'react';
import axios from 'axios';

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
    axios
      .post('http://localhost:5000/notes', {
        title: this.state.title,
        content: this.state.content
      })
      .then(response => {
        this.setState({ title: '', content: '' });
      })
      .catch(error => {
        console.log(`There was an error adding a new note: ${error}`);
      });
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
              value={this.state.title}
            />
            <Input
              className="input-content"
              type="textarea"
              name="content"
              placeholder="Note Content"
              onChange={this.handleChange}
              value={this.state.content}
            />
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
