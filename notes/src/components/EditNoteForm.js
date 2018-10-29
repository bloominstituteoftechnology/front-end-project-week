import React from "react";

const EditNoteForm = props => {
  if (props.notes.length) {
    let note = props.notes.find(
      note => `${note._id}` === props.match.params.id
    );
    const editToNotes = e => {
      e.preventDefault();
      props.editNote(note._id);
      props.history.push(`/note/${note._id}`);
    };
    return (
      <form className="form">
        <h2>Edit Note:</h2>
        <input
          type="text"
          name="utitle"
          placeholder="Note Title"
          onChange={props.handleInput}
          value={props.utitle}
        />
        <textarea
          name="utextBody"
          id=""
          cols="30"
          rows="10"
          placeholder="Note Content"
          onChange={props.handleInput}
          value={props.utextBody}
        />
        <button onClick={editToNotes}>Update</button>
      </form>
    );
  } else {
    return <h2>Loading Edit Note Form...</h2>;
  }
};

export default EditNoteForm;
