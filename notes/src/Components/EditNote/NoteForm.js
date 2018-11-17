import React from 'react';
import PropTypes from 'prop-types';

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
      <textarea name="newText" onChange={props.handleInput} placeholder="Note Content" value={props.textBody} />
      <button className="navButton" type="submit">Save</button>
    </form>
  );
};

// Double check to make sure we have all of the correct values passed as props
NoteForm.propTypes = {
  title: PropTypes.string,
  textBody: PropTypes.string,
  handleInput: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default NoteForm;