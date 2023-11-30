import React, { useState } from 'react';
import { createNote } from '../../notesService';
import {
  CreateTitle,
  StyledCreateView,
  SaveNewButton,
  StyledCreateForm,
  NoteTitleInput,
  NoteContentInput,
} from './styles';

const initialState = {
  title: '',
  textBody: '',
};

const CreateNote = (props) => {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState(previousState => ({ ...previousState, [name]: value }
    ));
  };

  const saveNote = async (event) => {
    event.preventDefault();
    const newNote = { title, textBody };

    if (title.length > 0 && textBody.length > 0) {
      try {
        await createNote(newNote);
        setState(initialState);
        props.history.push('/');
      } catch (error) {
        console.error(error);
      }
    } else {
      window.alert(
        'Please fill in both Title and Content fields to submit a new note',
      );
    }
  };

  const { title, textBody } = state;

  return (
    <StyledCreateView>
      <CreateTitle>Create New Note</CreateTitle>
      <StyledCreateForm>
        <NoteTitleInput
          type="text"
          name="title"
          placeholder="Note Title"
          onChange={handleChange}
          value={title}
        />
        <NoteContentInput
          name="textBody"
          placeholder="Note Content"
          onChange={handleChange}
          value={textBody}
        />
        <SaveNewButton onClick={saveNote}>Save</SaveNewButton>
      </StyledCreateForm>
    </StyledCreateView>
  );
};

export default CreateNote;
