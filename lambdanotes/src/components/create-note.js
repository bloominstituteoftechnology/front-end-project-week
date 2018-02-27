import React, { Component } from 'react';
import styled from 'styled-components';

const CreateNoteStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100vh;
  background-color: rgb(243, 243, 243);

  button {
    width: 100px;
    margin-top: 20px;
    height: 50px;
    background-color: rgb(94, 190, 195);
    color: #FFFFFF;
    outline: none;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .NoteTitleInput {
    width: 50%;
    outline: none;
    font-size: 1rem;
  }

  .NoteContentInput {
    width: 80%;
    height: 300px;
    margin-top: 20px;
    outline: none;
    font-size: 1rem;
    resize: none;
  }
`

class CreateNote extends Component {
  state = {
    title: '',
    content: '',
  }
  
  render() {
    return (
      <CreateNoteStyled>
        <h1>Create New Note:</h1>
        <input className="NoteTitleInput" type="text" placeholder="Note Title"/>
        <textarea className="NoteContentInput"type="text" placeholder="Note Content" rows="10" cols="50"/>
        <button onClick={this.props.getNextId}>Save</button>
      </CreateNoteStyled>
    )
  }
}

export default CreateNote;