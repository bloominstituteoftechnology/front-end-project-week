import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { addNote } from '../../actions';

class CreateNote extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      text: ''
    };
  }

  handleInput = (event) => {
    if (event.target.name === 'title') {
      this.setState({ title: event.target.value });
    } else {
      this.setState({ text: event.target.value });
    }
  }

  submitNote = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: '',
      text: ''
    });
  };

  render() {
    return (
      <div>
        <h1>Create New Note: </h1>
        <Form onSubmit={this.submitNote}>
          <FormGroup>
            <Input name="title" type="text" onChange={this.handleInput}placeholder="Note Title"/>
            <Input type="textarea" name="text" type="text" onChange={this.handleInput} placeholder="Note Content"/>
            <Button>Save</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

//need input handler

export default connect(null, { addNote })(CreateNote);