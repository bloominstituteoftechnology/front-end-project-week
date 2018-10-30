import React from "react";
import Form from "../components/Form";

import { MainContent } from "../styles";

const FormContainer = ({
  editing,
  newNote,
  handleInputChange,
  handleSubmit,
  handleCancel,
}) => (
  <MainContent>
    <Form
      editing={editing}
      newNote={newNote}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  </MainContent>
);

export default FormContainer;
