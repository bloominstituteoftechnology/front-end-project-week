import React from "react";

const CreateNotes = props => {
  return (
    <div>
      <form>
        <input
          onChange={props.handleNoteChange}
          type="text"
          name="notetitle"
          value={props.value}
          placeholder="title"
        />
        <input
          onChange={props.handleNoteChange}
          type="text"
          name="notebody"
          value={props.value}
          placeholder="body"
        />
        <button onSubmit={props.handleCreateNote}>Test</button>
      </form>
    </div>
  );
};

export default CreateNotes;
