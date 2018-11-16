import React from 'react';

/* EditNote/NoteForm.js
 * Instead of duplicating the form, can use same one for edit
 * and create.
 * 
 * Takes in props:
 * -- handleInput: fn()
 * -- handleSubmit: fn()
 * -- title: ""
 * -- textBody: ""
 */
const NoteForm = (props) => {
  return(
    <form className="noteForm" onSubmit={props.handleSubmit}>
      <input name="newTitle" onChange={props.handleInput} placeholder="Note Title" value={props.title} />
      <textarea name="newText" onChange={props.handleInput} placeholder="Note Content"
        value={props.textBody}>
      </textarea>
      <button className="navButton" type="submit">Save</button>
    </form>
  );
};

export default NoteForm;