import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";

class EditNote extends Component {
  state = {
    // note: [],
    title: "",
    textBody: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateNotes = e => {
    console.log("inside updateNotes");
    const id = this.props.match.params.id;
    console.log(id);

    // const path = `https://killer-notes.herokuapp.com/note/edit/${id}`;

    axios
      .put(`localhost:3333/dashboard/${id}`, {
        title: this.state.title,
        textBody: this.state.textBody
      })
      .then(response => {
        console.log(response);
        console.log(response.data);
        this.setState({ title: "", textBody: "" });
        console.log("new state set");
      })
      .catch(error => {
        console.log(`There was an error updating notes: ${error.message}`);
      });
  };

  handleUpdate = e => {
    console.log("update handled");
    e.preventDefault();
    this.setState({ title: "", textBody: "" });
    this.updateNotes();
    console.log("note updated");
  };

  render() {
    return (
      <Form>
        <H2>Edit Note:</H2>
        <InputTitle
          type="text"
          placeholder="Note Title..."
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <InputtextBody
          type="text"
          placeholder="Note textBody..."
          name="textBody"
          value={this.state.textBody}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleUpdate}>Update</Button>
      </Form>
    );
  }
}

const Form = styled.form`
  margin: 38px 4% 0 4%;
  display: flex;
  flex-direction: column;
  margin-left: 275px;
`;

const H2 = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 30px;
`;

const InputTitle = styled.input`
  width: 56.5%;
  height: 40px;
  border-radius: 5px;
  padding-left: 1.5%;
  border: 1px solid grey;
`;

const InputtextBody = styled.input`
  width: 98.75%;
  height: 345px;
  border-radius: 5px;
  margin: 10px 0;
  border: 1px solid grey;
`;

const Button = styled.button`
  color: white;
  background-color: #2bc1c4;
  width: 31.5%;
  height: 45px;
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid grey;
`;

export default EditNote;
