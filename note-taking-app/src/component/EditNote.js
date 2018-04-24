import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Col } from 'reactstrap';


export default class EditNote extends Component {
  state = {
    title: '',
    content: '',
    id: this.props.match.params.id,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  };

  render() {
    return (
      <Col className='editNote'>
        <Form 
        // onSubmit={ this.handeSubmit }
        >
          <h4 className='editNote__title text-left mt-5 mb-4'>Edit Note:</h4>
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
              rows='10'
              name='content'
              placeholder='Note Content'
              onChange={ this.handleChange }
              value={ this.state.content }
            />
          </FormGroup>
          <Button className='newNote__button'>Save</Button>
        </Form>
      </Col>
    )
  }
}