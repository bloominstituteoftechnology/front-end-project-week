import './Notes.css';
import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AddNote extends Component {
  constructor(props){
    super();
      this.state = {
      title: '',
      content: ''
    }
  }
  

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({title: '', content: ''})
  }

  render() {
    return (
      <Col className='addNote px-4'>
        <Form
        >
          <h4 className='addNote__title text-left mt-5 mb-4'>Create New Note:</h4>
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
              type='textarea'
              rows='16'
              name='content'
              placeholder='Note Content'
              onChange={ this.handleChange }
              value={ this.state.content }
            />
          </FormGroup>
          <Link to="/" onSubmit={this.handleSubmit}>
            <Button type="submit" color="info" className='addNote__button mb-3'>Save</Button>
          </Link>
        </Form>
      </Col>
    )
  }
}