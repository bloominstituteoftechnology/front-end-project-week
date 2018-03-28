import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

export default class AddNote extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  };

  handeSubmit = event => {
    event.preventDefault();
    this.props.add(this.state);
    this.setState({
      title: '',
      content: ''
    });
  };

  render() {
    return (
      <Form onSubmit={ this.handeSubmit }>
        <FormGroup>
          <Input
            type='text'
            name='title'
            placeholder='Note Title'
            onChange={ this.handleChange }
            value={ this.state.title }
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='content'
            placeholder='Note Content'
            onChange={ this.handleChange }
            value={ this.state.content }
          />
        </FormGroup>
        <Button>Save</Button>
      </Form>
    )
  }
}