

import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export default class CreateNewNote extends Component {

  constructor(props){
    super(props);
    this.state = {
      note_title:'',
      note_content: ''
    }
  };

  handleChange = e =>{
    this.setstate({ [e.target.name]: e.target.value});
  }

  handleSubmit = e =>{
    e.preventDefault();
    this.props.CreateNewNote(this.state);
    this.setState({
      note_title: '',
      note_content: ''
    });


  }
  render() {
    return (
    <div>
    <h4> Create A New Note</h4>
    <Form>
    <FormGroup>
          <Input 
          type="text" 
          name="noteTitle" 
          placeholder="Note Title"
          onChange={this.handleChange}
          value={this.state.noteTitle} />
        </FormGroup>

        <FormGroup>
        <Input
        type="textarea"
        name="noteContent"
        placeholder="New Note Content"
        onchange={this.handlechange}
        value={this.state.noteContent} />
        </FormGroup>

        <Button onClick={this.handleNewNoteInput}>Submit Note</Button>
    </Form>
    </div>
    )
  }
}

