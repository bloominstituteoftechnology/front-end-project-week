import React from 'react';

const NoteEdit = props => {
  const note = props.notes.find(note => props.match.params.id === `${note.id}`);

  const editNotes = event => {
    event.preventDefault();
    props.editNote(note.id);
    props.history.push(`/note/get/${note.id}`);
  };

  console.log(props);
  return (
    <div className='noteSubmit'>
      <form className='form'>
        <h2 className='noteEdit__header'>Edit Note:</h2>
        <input
          type='text'
          name='updatedTitle'
          placeholder='Title'
          onChange={props.handleInputChange}
          value={props.updatedTitle}
          className='noteEdit__input--title'
        />
        <textarea
          name='updatedTextBody'
          cols='30'
          rows='10'
          placeholder='Note Content'
          onChange={props.handleInputChange}
          value={props.updatedTextBody}
          className='noteEdit__input--content'
        />
        <button className='btn' onClick={editNotes}>
          Update
        </button>
      </form>
    </div>
  );
};

export default NoteEdit;
