import React, { Component } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import { Form, FormGroup, Input, Button } from 'reactstrap';

export default class EditNote extends Component {
  state = {
    note: [],
    title: '',
    content: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = e => {
    e.preventDefault();
    this.setState({ title: '', content: '' });

    const id = this.props.match.params.id;

    axios

      .put(`http://localhost:5000/notes/${id}`, {
        title: this.state.title,
        content: this.state.content
      })
      .then(response => {
        console.log(response);
        this.setState({ title: '', content: '' });
      })
      .catch(error => {
        console.log(`There was an error updating notes: ${error.message}`);
      });
  };

  render() {
    return (
      <div>
        <h4 className="heading">Edit Note:</h4>
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
            className="btn btn-block float-left save-button"
            onClick={this.handleUpdate}
            // onClick={() => this.handleUpdate(this.state.note.id)}
          >
            Update
          </Button>
        </Form>
      </div>
    );
  }
}
