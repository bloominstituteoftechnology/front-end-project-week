import React from 'react';
import NoteModal from './NoteModal';

export default ({ match, history }) => {
  const { id, path } = match.params;
  const deleteNote = () => {
    history.push('/');
  }
  const cancelDeletion = () => {
    history.push(`/view/${path}`);
  }
  return (
    <div>
      <NoteModal yesHandler={ deleteNote } noHandler={ cancelDeletion }/>
    </div>
  );
}
