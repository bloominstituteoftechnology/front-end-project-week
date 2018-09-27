import React from "react";

const EditNote = props => {
  const id = parseInt(props.match.params.id, 10);
  let note = props.state.notes.filter(note => {
    return note.id === id;
  });

  note = note[0];

  const editHandler = event => {
    props.editHandler(event);
    event.target.reset();
    props.history.push("/");
  };

  return (
    <div className="edit-note">
      <h4>Edit Note:</h4>
      <form id={id} onSubmit={editHandler}>
        <input
          className="title"
          name="title"
          placeholder="Title"
          value={props.state.title.length > 0 ? props.state.title : note.title}
          onChange={props.changeHandler}
        />
        <textarea
          className="text"
          name="contents"
          placeholder="Enter your note"
          value={
            props.state.contents.length > 0
              ? props.state.contents
              : note.contents
          }
          onChange={props.changeHandler}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditNote;
