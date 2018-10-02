import React from 'react';

const NoteForm = props => {
  return (
    <div>
      <h2>Create New Note:</h2>
      <form>
        <input
          name='title'
          placeholder='Note Title'
          value={props.state.title}
        />
        <input
          name='textBody'
          placeholder='Note Content'
          value={props.state.textBody}
        />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}

export default NoteForm;