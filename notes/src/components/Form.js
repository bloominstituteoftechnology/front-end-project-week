import React from "react";

import { StyledForm, Input, Cancel, Button } from "../styles";
import xCancel from "../assets/x.svg" 

const Form = ({ editing, newNote, handleInputChange, handleSubmit, handleCancel, onKeyDown }) => (
  <StyledForm onSubmit={handleSubmit}>
    <Cancel src={xCancel} alt="cancel" onClick={handleCancel}/>
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
    <Button type="submit" onClick={handleSubmit}>
      {editing ? "Update" : "Submit a New Note"}
    </Button>
  </StyledForm>
);

export default Form;
