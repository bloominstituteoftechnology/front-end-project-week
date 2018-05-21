

import React, { Component } from 'react';
import SideNav from './SideNav';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export default class CreateNewNote extends Component {

  constructor(props){
    super(props);
    this.state = {
      noteTitle:'',
      noteContent: ''
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
      this.setState({
      noteTitle: '',
      noteContent: ''
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
          placeholder="New Note Title"
          onChange={this.handleChange}
          value={this.state.noteTitle} />
        </FormGroup>

        <FormGroup>
        <Input
        type="textarea"
        name="noteContent"
        placeholder="New Note Content"
        onChange={this.handleChange}
        value={this.state.noteContent} />
        </FormGroup>

        <Button onClick={this.handleSubmit}>Submit Note</Button>
    </Form>
    </div>
    )
  }
}

