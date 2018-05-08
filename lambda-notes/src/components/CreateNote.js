import React, { Component } from 'react';
import { Button, Form, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {createNote} from '../actions';


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
          <div>
            <Form>
              <Input type='text' name='title' value={this.state.title} onChange={this.handleChange}  placeholder='Note Title' />
              <Input type='textarea' name='body' value={this.state.body} onChange={this.handleChange} placeholder='Note Content' />
              <Button color='info' onClick={ this.handleSubmit }>Save</Button>
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