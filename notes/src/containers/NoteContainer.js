import React from "react";
import { MainContent } from "../styles";
import NoteList from "../components/NoteList";

const NoteContainer = ({ notes }) => (
  <MainContent>
    <h2>Your Notes:</h2>
    <NoteList notes={notes} />
  </MainContent>
);

export default NoteContainer;
