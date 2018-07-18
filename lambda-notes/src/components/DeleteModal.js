import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/index';
import NoteModal from './NoteModal';

const DeleteModal = ({ match, history, deleteNote, fetchNotes }) => {
  const { id } = match.params;
  const localDeleteNote = () => {
    const moveAndUpdate = () => {
      history.push('/');
      fetchNotes();
    };
    deleteNote(id, moveAndUpdate);
  };
  
  const cancelDeletion = () => {
    history.push(`/view/${id}`);
  };

  return (
    <div>
      <NoteModal
        prompt="Are you sure you want to delete this?"
        yesHandler={ localDeleteNote }
        yesText="Delete"
        noText="No"
        noHandler={ cancelDeletion }/>
    </div>
  );
};

export default connect(null, { deleteNote })(DeleteModal);