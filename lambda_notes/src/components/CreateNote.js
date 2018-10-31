// this is where you can create a new note

import React,{ Component } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from 'axios';
import { styled } from 'styled-components';
import { SideButton } from './Sidebar';


 class CreateNote extends  Component {
    state = {
       title: '',
       textBody: ''
    }
handleChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};

handleSubmit = event => {
    event.preventDefault();
    const newNote = {
        title: this.state.title,
        textBody:this.state.textBody
    }
    axios
        .post(`https://fe-notes.herokuapp.com/note/get/all`, {newNote})
        .then(res => {
            console.log(res);

        })

}



  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" onChange={this.handleChange}/>
          <button>SAVE</button>
        </FormGroup>
      </Form>
    );
  }
};
export default CreateNote;