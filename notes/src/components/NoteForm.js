import React from 'react';

const AddNote = props => (
  <div>
    <form onSubmit={props.onSubmit}>
      <input
        name="title"
        placeholder="Note Title"
        onChange={props.onChange}
        value={props.title}
      />
      <textarea
        name="text"
        placeholder="Note Content"
        onChange={props.onChange}
        value={props.text}
      />
      <button>{props.formText}</button>
    </form>
  </div>
);

export default AddNote;
