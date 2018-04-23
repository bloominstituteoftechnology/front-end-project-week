import React from "react";

const CreateNote = props => {
  return (
      <div className="right-div">
      <div className="create-form">
        <h3 className="notes-h3">Create New Note:</h3>
        <input className="title-box" placeholder="Note Title"/>
        <textarea rows="5" cols="80" className="text-box" placeholder="Note Content"/>
        <div className="save-button button">SAVE</div>
        </div>
    </div>
  ); //else
};

export default CreateNote;
