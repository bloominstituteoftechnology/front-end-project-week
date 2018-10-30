import React from 'react';

const NewNote = props => {
  return (
    <div>
      <h2>Create New Note</h2>

      <form onSubmit={props.addNote}>
        <input
          type="text"
          placeholder="Note Title"
          onChange={props.handleInput}
          name="title"
          value={props.title}
        />

        <textarea
          type="text"
          placeholder="Note Content"
          onChange={props.handleInput}
          name="textBody"
          value={props.textBody}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NewNote;
