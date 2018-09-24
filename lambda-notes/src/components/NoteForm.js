import React from 'react';

const NoteForm = (props) => {
  return (
    <form>
      Title:
      <input
        type="text"
        name="title"
        placeholder="Title"
        //Notice below, we're filling in the name prop thats part of the inputData prop object we set in App.js
        value={props.inputData.title}
        onChange={props.handleInput}
      />
      Description:
      <input
        type="text"
        name="title"
        placeholder="Description"
        value={props.inputData.textBody}
        onChange={props.handleInput}
      />
      <button onClick={props.handleAdd}>Add Note</button>
    </form>
  );
};

export default NoteForm;