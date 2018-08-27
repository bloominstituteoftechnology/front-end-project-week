import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Input, Button } from 'reactstrap';

const NewNoteContainer = styled.div `
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

const NewNoteForm = styled.form `
  text-align: left;
`;

export default function NewNote(props) {
  return (
      <NewNoteContainer>
        <NewNoteForm onSubmit={(event) => {event.preventDefault(); props.addNote(props); props.history.push('/')}}>
          <TitleInput name='newTitle' type='text' value={props.title} placeholder='new note title...' onChange={props.change} /><br/>
          <NoteInput name='newNote' type='text' value={props.note} placeholder='new note text...' onChange={props.change} /><br/>
          <Button type='submit'>Submit Note</Button>
        </NewNoteForm>
      </NewNoteContainer>
  )
}
