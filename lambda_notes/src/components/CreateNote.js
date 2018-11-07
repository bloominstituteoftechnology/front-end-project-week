// this is where you can create a new note

import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import styled from "styled-components";

const SideButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  margin-top: 10px;
  text-decoration: none;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: #fafafa;
  background-color: #00A3FF;
  border: none;
  border-radius: 5px;
  display: block;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const StyledNote = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 320px;
  width: 300px;
  padding-bottom: 20px;
`;

const SecondaryHeading = styled.h2`
  margin-bottom: 2rem;
  margin-left: 320px;
  z-index: 10;
  text-decoration: none;
  color: black;
`;

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
    console.log(newNote);
    this.props.createNote(newNote);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <SecondaryHeading>Create New Note:</SecondaryHeading>

        <StyledNote>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.title}
              type="text"
              name="title"
              id=""
              cols="100"
              rows="30"

              onChange={this.handleChange}
            />
            <textarea
              value={this.state.textBody}
              name="textBody"
              id=""
              cols="160"
              rows="30"
              onChange={this.handleChange}
            />
            <SideButton style={{backgroundColor: '#00A3FF'}}>SAVE</SideButton>
          </form>
        </StyledNote>
      </div>
    );
  }
}
export default CreateNote;
