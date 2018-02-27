import React, { Component } from 'react';
import styled from 'styled-components';

const CreateNoteStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  background-color: rgb(243, 243, 243);

  button {
    width: 100px;
    margin-top: 20px;
    height: 50px;
    background-color: rgb(94, 190, 195);
    color: #FFFFFF;
  }

  .NoteTitleInput {
    width: 50%;
  }

  .NoteContentInput {
    width: 80%;
    height: 300px;
    margin-top: 10px;
  }
`

class CreateNote extends Component {
  render() {
    return (
      <CreateNoteStyled>
        <h1>Create New Note:</h1>
        <input className="NoteTitleInput" type="text" placeholder="Note Title"/>
        <input className="NoteContentInput"type="text" placeholder="Note Content"/>
        <button>Save</button>
      </CreateNoteStyled>
    )
  }
}

export default CreateNote;