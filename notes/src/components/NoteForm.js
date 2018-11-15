import React from "react";

const NoteForm = props => {
  const handleClick = () => {
    const newNote = {
      title: props.title,
      tags: props.tags,
      textBody: props.textBody
    };
    props.postNotes(newNote);
    props.history.push(`/`);
  };

  return (
    <div>
      <div className="note-form">
        <input
          className="input-tags"
          type="text"
          name="tags"
          value={props.value}
          onChange={props.handleInput}
          placeholder="tag"
        />

        <input
          className="input-title"
          type="text"
          name="title"
          value={props.value}
          onChange={props.handleInput}
          placeholder="Title"
        />
        <textarea
          className="input-body"
          type="textarea"
          name="textBody"
          value={props.value}
          onChange={props.handleInput}
          placeholder="Start writing..."
        />
        <div className="btn-container">
          <button onClick={handleClick}>Save</button>
        </div>
      </div>
    </div>
  );
};
export default NoteForm;
