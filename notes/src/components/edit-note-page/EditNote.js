import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'reactstrap';

const EditNoteContainer = styled.div `
  width: 667.5px;
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NoteInput = styled.textarea `
  height: 400px;
  width: 500px;
  text-align: top;
`;

const TitleInput = styled.input `
  width: 400px;
  margin-bottom: 10px;
`;

const EditNoteForm = styled.form `
  text-align: left;
`;

export const EditNote = (props) => {
  return (
    <EditNoteContainer>
      <EditNoteForm onSubmit={(event) => {props.editComplete(props.note); event.preventDefault(); }} >
        <TitleInput onChange={(event) => {props.change(event)}} name='newTitle' type='text' value={props.title} placeholder={props.title} />
        <NoteInput onChange={(event) => {props.change(event)}} name='newNote' type='text' value={props.note} placeholder={props.note} />
        <button type='submit'>Submit Changes</button>
      </EditNoteForm>
    </EditNoteContainer>
  )
}
