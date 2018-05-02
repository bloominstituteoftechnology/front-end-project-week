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
    console.log('after State', this.state)
  }
  render() {
      return (
          <div>
            <Form>
              <Label for ='Title'>Title</Label>
              <Input type='text' name='title' value={this.state.title} onChange={this.handleChange}  placeholder='Title' />
              <Label for ='Body'>Title</Label>
              <Input type='textarea' name='body' value={this.state.body} onChange={this.handleChange} placeholder='Body' />
              <Button onClick={ this.handleSubmit }>Create Note</Button>
            </Form>
            <Button><Link to='/'>Home</Link></Button>
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