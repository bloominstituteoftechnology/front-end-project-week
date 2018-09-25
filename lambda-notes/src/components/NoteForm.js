import React from 'react';
const NoteForm = (props) => {
  return (
    <form>
      <p>Title:</p>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={props.inputData.title}
        onChange={props.handleInput}
      />
      <p>Description:</p>
      <input
        type="text"
        name="textBody"
        placeholder="Description"
        value={props.inputData.textBody}
        onChange={props.handleInput}
      />
      <button onClick={props.handleAdd}>Add Note</button>
    </form>
  );
};
export default NoteForm; 