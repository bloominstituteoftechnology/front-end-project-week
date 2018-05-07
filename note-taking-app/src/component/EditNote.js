import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Button, Col } from 'reactstrap';


export default class EditNote extends Component {
  state = {
    title: '',
    content: '',
    id: 0,
  };

  componentDidMount() {
    this.setState({
      id: this.props.note.id,
      title: this.props.note.title,
      content: this.props.note.content,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  };

  handleSubmit = _ => {
    const { id, title, content } = this.state;
    this.props.EditNote({ id, title, content });
    this.setState({ id: 0, title: '', content: '', });
  };

  render() {
    const { title, content } = this.state;
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
              value={ title }
            />
          </FormGroup>
          <FormGroup>
            <Input
              type='textarea'
              rows='16'
              name='content'
              placeholder='Note Content'
              onChange={ this.handleChange }
              value={ content }
            />
          </FormGroup>
          <Link to={"/"}><Button onClick={() => this.handleSubmit()} color="info" className='addNote__button mb-3'>Update</Button></Link>
        </Form>
      </Col>
    );
  };
}