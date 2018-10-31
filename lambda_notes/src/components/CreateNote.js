// this is where you can create a new note

import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import { styled } from "styled-components";
import { SideButton } from "./Sidebar";

class CreateNote extends Component {
  state = {
    title: "",
    textBody: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody
    };
      console.log(newNote)
    this.props.createNote(newNote);
    this.props.history.push("/");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.title} type="text" name="title" id="" onChange={this.handleChange}/>
        <textarea value={this.state.textBody} name="textBody" id="" cols="30" rows="10" onChange={this.handleChange}/>
        <button>SUBMIT</button>
      </form>
    );
  }
}
export default CreateNote;
