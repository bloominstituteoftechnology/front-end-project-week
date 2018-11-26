import React from 'react';

const NoteModal = ({ deleteNote, hideModal }) => (
  <div className="modal">
    <div className="modal-actions">
      <p>Are you sure you want to delete this?</p>
      <button className="delete" type="button" onClick={deleteNote}>
        Delete
      </button>
      <button type="button" onClick={hideModal}>
        No
      </button>
    </div>
  </div>
);

export default NoteModal;
