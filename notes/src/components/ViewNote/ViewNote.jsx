import React, { useCallback, useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import {
  NoteView,
  NoteTitle,
  NoteLinkContainer,
  NoteLink,
  NoteTextContainer,
  NoteContent,
  NoteLinkText,
} from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteNote, getNote } from '../../notesService.js';

const ViewNote = () => {
  const [note, setNote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchNote = useCallback(async () => {
    try {
      const res = await getNote(id);
      console.log('RES: ', res);
      setNote(res.data.note);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchNote().then(n => console.log('NOTE: ', n));
  }, [fetchNote]);

  const handleDeleteNote = async () => {
    setShowModal(prev => !prev);
    try {
      await deleteNote(note.id);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const displayModal = () => {
    setShowModal(prev => !prev);
  };

  if (!note) return <NoteTitle>Loading your note...</NoteTitle>;

  return (
    <NoteView>
      <Modal
        showModal={showModal.toString()}
        deleteNote={handleDeleteNote}
        displayModal={displayModal}
      />
      <NoteLinkContainer>
        <NoteLink to={`/note/${note.id}/edit`} state={{ ...note }}>
          <NoteLinkText>edit</NoteLinkText>
        </NoteLink>
        <NoteLinkText onClick={displayModal}>delete</NoteLinkText>
      </NoteLinkContainer>
      <NoteTextContainer>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteContent>{note.textBody}</NoteContent>
      </NoteTextContainer>
    </NoteView>
  );
};

export default ViewNote;
