import React from "react";
import { MainContent, NoteWrapper, EditDelete } from "../styles";

const Note = ({ title, text }) => (
  <MainContent>
    <NoteWrapper>
      <h2>{title}</h2>
      <p> {text}</p>
      <EditDelete>
        <span>Edit</span>
        <span>Delete</span>
      </EditDelete>
    </NoteWrapper>
  </MainContent>
);

export default Note;
