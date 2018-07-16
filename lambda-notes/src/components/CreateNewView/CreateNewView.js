import React from "react";
import CreateNewNoteForm from "./CreateNewNoteForm";

const CreateNewView = props => {
  return (
    <div>
      <h2>Create New Note:</h2>
      <CreateNewNoteForm
        handleInputChange={props.handleInputChange}
        handleSubmit={props.handleSubmit}
      />
    </div>
  );
};

export default CreateNewView;
