import React from "react";
import { NoteCardWrapper } from "../styles";

const NoteCard = ({ note }) => (
  <NoteCardWrapper>
    <h2>{note.title}</h2>
    <p>
      {note.textBody
        .split(" ")
        .splice(0, 100)
        .join(" ")
        .concat("...")}
      }
    </p>
  </NoteCardWrapper>
);

export default NoteCard;
