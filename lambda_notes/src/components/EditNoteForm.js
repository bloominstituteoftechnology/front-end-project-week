import React, { Component } from "react";
import { connect } from "react-redux";
import { editNote } from "../store/actions";
import styled from "styled-components";

// ==============================
// ======   STYLED COMPS   ======
// ==============================

const Form = styled.form`
  padding: 50px 20px;
  padding-left: 350px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Button = styled.button`
  background: #2bc1c4;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 12px 55px;
  cursor: pointer;
  border: 1px solid #979797;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  width: 25%;

  &:hover {
    background: white;
    color: #2bc1c4;
  }

  &:active {
    opacity: 0.5;
  }
`;

const H2 = styled.h2`
  color: #4a4a4a;
`;

const Input = styled.input`
  display: block;
  width: 55%;
  padding: 10px;
  margin-bottom: 15px;
`;

const Textarea = styled.textarea`
  padding: 20px;
  margin-bottom: 15px;
  height: 50vh;
  resize: none;
`;

// ==============================
// ======    COMPONENTS    ======
// ==============================

class EditNoteForm extends Component {
  state = {
    title: "",
    textBody: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title && this.state.textBody) {
      editNote(this.state);
      this.setState({
        title: "",
        textBody: ""
      });
    }
    return null;
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <H2>Edit Note: </H2>
        <Input
          type="text"
          value={this.state.title}
          placeholder="Note Title"
          onChange={this.handleInputChange}
          name="title"
        />
        <Textarea
          placeholder="Note Content"
          onChange={this.handleInputChange}
          name="textBody"
        />
        <Button>Update</Button>
      </Form>
    );
  }
}

export default connect(
  null,
  { editNote }
)(EditNoteForm);
