import React from "react";

const CreateNotes = props => {
  return (
    <div>
      <form onSubmit={props.CreateNotes}>
        <input type="text" name="title" placeholder="Title..." />
        <input type="text" name="body" placeholder="Enter your notes here..." />
        <button>Save</button>
      </form>
    </div>
  );
};

export default CreateNotes;
