import React from "react";

export default function CreateEditNote(props) {
  function handleSubmit(event) {
    event.preventDefault();

    if (props.updatingNote) {
      props.handleUpdateNote();
    } else {
      props.handleAddNote(event);
    }
  }

  return (
    <div>
      <h2>{props.updatingNote ? "Update Note" : "Add A New Note"}</h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="Note Title"
            value={props.note.title}
            name="title"
            onChange={props.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Note Text"
            value={props.note.textBody}
            name="textBody"
            onChange={props.handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
