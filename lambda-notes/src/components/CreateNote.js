import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import './CreateNote.css';
import { Form, FormGroup, Input, Button } from 'reactstrap';

export default class CreateNote extends Component {
  state = {
    title: '',
    content: '',
    fireRedirect: false
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
        this.setState({ fireRedirect: true });
      })
      .catch(error => {
        console.log(`There was an error adding a new note: ${error}`);
      });
  };

  render() {
    const { from } = this.props.location.state || '/';
    const { fireRedirect } = this.state;

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
            className="btn btn-block float-left save-button"
            onClick={this.handleSubmit}
          >
            Save
          </Button>
        </Form>
        {fireRedirect && <Redirect to={from || '/'} />}
      </div>
    );
  }
}
