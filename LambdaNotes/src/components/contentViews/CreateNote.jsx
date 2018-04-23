import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { addNote } from '../../actions';

class CreateNote extends Component {
  constructor() {
    super();

    this.state = {
      note: {
        title: '',
        text: ''
      }
    };
  }

  handleInput = (event) => {
    const newNote = this.state.note;
    newNote[event.target.name] = event.target.value;
    this.setState({ newNote });
  };

  submitNote = (event) => {
    event.preventDefault();
    this.props.addNote(this.state.note);
    this.setState({ 
      note: {
        title: '',
        text: ''
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Create New Note: </h1>
        <Form onSubmit={this.submitNote}>
          <FormGroup>
            <Input name="title" type="text" onChange={this.handleInput}placeholder="Note Title"/>
            <Input type="textarea" name="text" onChange={this.handleInput} placeholder="Note Content"/>
            <Button>Save</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default connect(null, { addNote })(CreateNote);