import React from "react";
import Form from "../components/Form";

import { MainContent } from "../styles";

const FormContainer = ({
  editing,
  newNote,
  handleInputChange,
  handleSubmit,
  handleCancel,
  onKeyDown
}) => (
  <MainContent>
    <Form
      editing={editing}
      newNote={newNote}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      onKeyDown={onKeyDown}
    />
  </MainContent>
);

export default FormContainer;
