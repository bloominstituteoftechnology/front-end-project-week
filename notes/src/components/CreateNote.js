import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const CreateNoteContainer = styled.div`
  padding-top: 50px;
`;

const CreateNoteHeader = styled.h2`
  display: flex;
  flex-direction: row;
  color: #4a494a;
  font-size: 2.4rem;
  margin-bottom: 30px;
  font-weight: bold;
`;

const CreateNoteForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 93%;
`;

const NoteTitleInput = styled.input`
  border: 1px solid #979797;
  border-radius: 3px;
  width: 50%;
  height: 35px;
  padding: 0 5px 0 5px;
  font-size: 0.9rem;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

const NoteTextBodyInput = styled.textarea`
  border: 1px solid #979797;
  border-radius: 3px;
  width: 100%;
  height: 600px;
  padding: 12px 5px 0 5px;
  font-size: 0.9rem;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

const NoteSaveButton = styled.button`
  display: block;
  border: 1px solid #959898;
  outline: none;
  text-decoration: none;
  background-color: #5dbec3;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  padding: 0.8rem 0;
  width: 35%;
  margin-bottom: 40px;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  inputChangehandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNew = e => {
    e.preventDefault();
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, {
        title: this.state.title,
        textBody: this.state.textBody
      })
      .then(response => {
        this.props.refreshMain();
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
    this.setState({
      title: "",
      textBody: ""
    });
  };

  render() {
    return (
      <CreateNoteContainer>
        <CreateNoteHeader>Create New Note:</CreateNoteHeader>
        <CreateNoteForm onSubmit={this.addNew}>
          <NoteTitleInput
            type="text"
            name="title"
            placeholder="Note Title"
            onChange={this.inputChangehandler}
            value={this.state.title}
          />
          <NoteTextBodyInput
            type="text"
            name="textBody"
            placeholder="Note Content"
            onChange={this.inputChangehandler}
            value={this.state.textBody}
          />
          <NoteSaveButton type="submit">Save</NoteSaveButton>
        </CreateNoteForm>
      </CreateNoteContainer>
    );
  }
}

export default CreateNote;
