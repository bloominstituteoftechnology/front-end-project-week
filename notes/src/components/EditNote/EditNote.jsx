import React, { useEffect, useState } from 'react';
import {
  StyledEditView,
  StyledEditForm,
  NoteTitleInput,
  NoteContentInput,
  SaveEditedButton,
  EditTitle,
} from './styles';
import { editNote, getNote } from '../../notesService.js';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const EditNote = props => {
  const [title, setTitle] = useState('');
  const [textBody, setTextBody] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setTitle(location.state.title);
    setTextBody(location.state.textBody);
  }, [location.state]);

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'title') setTitle(value);
    if (name === 'textBody') setTextBody(value);
  };

  const saveEdit = async event => {
    event.preventDefault();
    const editedNote = { title, textBody };

    if (title.length > 0 && textBody.length > 0) {
      try {
        await editNote(id, editedNote);
        await getNote(id);
        navigate(`/note/${id}`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return <StyledEditView>
    <EditTitle>Edit Note:</EditTitle>
    <StyledEditForm>
      <NoteTitleInput
        type="text"
        name="title"
        onChange={handleChange}
        value={title}
      />
      <NoteContentInput
        source={textBody}
        name="textBody"
        onChange={handleChange}
        value={textBody}
      />
      <SaveEditedButton onClick={saveEdit}>Save</SaveEditedButton>
    </StyledEditForm>
  </StyledEditView>;
};

export default EditNote;
