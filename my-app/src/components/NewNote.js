import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

class NewNote extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      id: Date.now()
    };
    const emptyNote = {
      title: "",
      content: ""
    };
    this.props.createNote(newNote);
    this.setState(emptyNote);
    this.props.history.push("/list-view");
  };

  render() {
    return (
      <Form>
        <H2>Create New Note:</H2>
        <InputTitle
          type="text"
          placeholder="Note Title Here..."
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <InputContent
          type="text"
          placeholder="Note Content..."
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleSubmit}>Save</Button>
      </Form>
    );
  }
}

const Form = styled.form`
  margin: 38px 4% 0 250px;
  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 30px;
`;

const InputTitle = styled.input`
  width: 57;
  height: 40px;
  border-radius: 5px;
  padding-left: 1.5%;
  border: 1px solid grey;
`;

const InputContent = styled.input`
  width: 98%;
  height: 345px;
  border-radius: 5px;
  margin: 10px 0;
  border: 1px solid grey;
`;

const Button = styled.button`
  color: white;
  background-color: #2bc1c4;
  width: 31;
  height: 45px;
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid grey;
`;

export default withRouter(NewNote);
