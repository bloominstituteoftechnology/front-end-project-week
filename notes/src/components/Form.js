import React from "react";

import { StyledForm, Input } from "../styles";

const Form = ({ editing }) => (
  <StyledForm>
    <h2>{editing ? "Edit Note" : "Create New Note"}</h2>
    <Input placeholder="Note Title" />
    <Input content placeholder="Note Content" />
  </StyledForm>
);

export default Form;
