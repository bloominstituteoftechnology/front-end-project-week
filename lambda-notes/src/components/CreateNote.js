import React, { Component } from 'react';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {createNote} from '../actions';
import '../css/CreateNote.css';



class CreateNote extends Component {
  constructor() {
    super()
    this.state={
      title: '',
      body: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNote(this.state);
    this.setState({ title: '', body: ''});
  }

  render() {
      return (
          <div className='createNote'>
            <Form>
              <FormGroup className='form'>
                <Input type='text' name='title' value={this.state.title} onChange={this.handleChange}  placeholder='Note Title' />
                <Input type='textarea' name='body' value={this.state.body} onChange={this.handleChange} placeholder='Note Content' />
                <Button color='info' onClick={ this.handleSubmit }>Save</Button>
              </FormGroup>
            </Form>
          </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      state: state,
    }

  }
  
  export default connect(mapStateToProps, {createNote})(CreateNote);