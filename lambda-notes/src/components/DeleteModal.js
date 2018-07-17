import React from 'react';
import NoteModal from './NoteModal';

export default ({ match, history }) => {
  const { id } = match.params;
  const deleteNote = () => {
    history.push('/');
  }
  const cancelDeletion = () => {
    history.push(`/view/${id}`);
  }
  return (
    <div>
      <NoteModal
        prompt="Are you sure you want to delete this?"
        yesHandler={ deleteNote }
        yesText="Delete"
        noText="No"
        noHandler={ cancelDeletion }/>
    </div>
  );
}
