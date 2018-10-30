import React from "react";
import { MainContent, ListHeading } from "../styles";
import NoteList from "../components/NoteList";

const NoteContainer = ({ notes }) => (
  <MainContent>
    <ListHeading>Your Notes:</ListHeading>
    <NoteList notes={notes} />
  </MainContent>
);

export default NoteContainer;
