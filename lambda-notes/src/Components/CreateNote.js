import React from "react";

const CreateNote = props => {
  return (
    <form className="create-note">
        <h1>Create New Note:</h1>
        <input
            name='titleValue'
            value={props.titleValue}
            onChange={props.handleInputChange}
            placeholder="Note Title..."
        />
        <textarea
            name='contentValue'
            value={props.contentValue}
            onChange={props.handleInputChange}
            placeholder="Note content..."
        />
        <div onClick={props.handleAddNote} className="custom-button">
            Save
        </div>
    </form>
  );
};

export default CreateNote;
