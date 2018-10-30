import React from 'react';

const EditNoteForm = props => {
    console.log(props)
  return (
    <div>
      <form id="style" onSubmit={props.editedNoteHandler} > 
          <input type="text" name="editedTitle" value={props.editedTitle}  placeholder="Update title" onChange={props.editedNoteTitleHandler}/>
          <input type="text" name="editedNote" value={props.editedNote} placeholder="Update note" onChange={props.editedNoteBodyHandler}  />
          <button onClick={props.editedNoteHandler} value='Update'>Save</button>
      </form>
    </div>
  );
};

export default EditNoteForm;

