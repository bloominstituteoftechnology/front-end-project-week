import React from 'react';

const EditNote = props => {
  return (
    <div>
      <h2>Edit Note:</h2>

      <form onSubmit={(e) => props.editNote(e, props.note._id)}>
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

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditNote;
