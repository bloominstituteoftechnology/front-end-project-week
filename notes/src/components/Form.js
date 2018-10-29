import React from "react";

import { StyledForm, Input, Button } from "../styles";

const Form = ({ editing, newNote, handleInputChange, handleSubmit }) => (
  <StyledForm onSubmit={handleSubmit}>
    <h2>{editing ? "Edit Note" : "Create New Note"}</h2>
    <Input
      placeholder="Note Title"
      name="title"
      value={newNote.title}
      onChange={handleInputChange}
    />
    <Input
      content
      placeholder="Note Content"
      name="textBody"
      value={newNote.textBody}
      onChange={handleInputChange}
    />
    <Button type="submit" onCLick={handleSubmit}>
      {editing ? "Update" : "Submit a New Note"}
    </Button>
  </StyledForm>
);

export default Form;
