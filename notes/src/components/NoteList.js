import React from "react";

import { NoteListWrapper } from "../styles";

import NoteCard from "./NoteCard";

const NoteList = ({ notes }) => (
  <NoteListWrapper>
    {notes.map(note => (
      <NoteCard note={note} />
    ))}
  </NoteListWrapper>
);

export default NoteList;
