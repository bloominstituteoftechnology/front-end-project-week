import React, { Component } from "react";
import styled from "styled-components";

// Styles
const CreateNoteStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100vh;
  background-color: rgb(243, 243, 243);
  border-left: 1px solid rgb(151, 151, 151);
  border-right: 1px solid rgb(151, 151, 151);

  button {
    width: 100px;
    margin-top: 20px;
    height: 50px;
    background-color: rgb(94, 190, 195);
    color: #ffffff;
    outline: none;
    font-size: 0.9rem;
    font-weight: bold;
    border: none;

    &:hover {
      border: 2px solid white;
    }
  }

  .NoteTitleInput {
    width: 50%;
    margin-top: 20px;
    font-size: 1rem;
  }
  
  .NoteContentInput {
    width: 80%;
    height: 300px;
    margin-top: 20px;
    font-size: 1rem;
    resize: none;
  }

  input, textarea {
    outline: 1px solid rgba(0 0 0 0);
    border-style: solid;
    border: 1px solid grey;

    &:hover {
      border-style: solid;
      outline: 1px solid rgba(0 0 0 0);
      border: 1px solid black;
    }
    
    &:focus {
      outline: 1px solid rgb(94, 190, 195);
      border: 1px solid rgb(94, 190, 195);
      border-style: solid;
    }
  }
`;

// CreateNote Component
class CreateNote extends Component {
  state = {
    title: '',
    content: ''
  };

  handleTitleInput = event => {
    this.setState({ title: event.target.value });
  };

  handleContentInput = event => {
    this.setState({ content: event.target.value });
  };

  handleSave = () => {
    let newNote = {
      title: this.state.title,
      content: this.state.content,
      // id: this.props.getNextId()
    }
    this.props.saveNewNote(newNote);
  }

  render() {
    return (
      <CreateNoteStyled>
        <h2>Create New Note:</h2>
        <input
          className="NoteTitleInput"
          type="text"
          placeholder="Note Title"
          value={this.state.title}
          onChange={this.handleTitleInput}
        />
        <textarea
          className="NoteContentInput"
          type="text"
          placeholder="Note Content"
          rows="10"
          cols="50"
          value={this.state.content}
          onChange={this.handleContentInput}
        />
        <button onClick={this.handleSave}>Save</button>
      </CreateNoteStyled>
    );
  }
} // CreateNote Component

export default CreateNote;
