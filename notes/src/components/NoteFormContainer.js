import React from 'react';
import NoteForm from './NoteForm';

const NoteFormContainer = ({ onChange, onSubmit, title, text, update, formText, formTitle }) => (
  <div className="note-form-container">
    <h2>{formTitle}</h2>
    <NoteForm
      onChange={onChange} 
      onSubmit={onSubmit} 
      title={title} 
      text={text} 
      formText={formText}
      update={update}
    />
  </div>
);

export default NoteFormContainer;
