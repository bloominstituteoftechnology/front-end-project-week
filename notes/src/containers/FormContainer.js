import React from "react";
import Form from "../components/Form";
import { MainContent } from "../styles";

const FormContainer = ({
  editing,
  newNote,
  handleInputChange,
  handleSubmit
}) => (
  <MainContent>
    <Form
      editing={editing}
      newNote={newNote}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  </MainContent>
);

export default FormContainer;
