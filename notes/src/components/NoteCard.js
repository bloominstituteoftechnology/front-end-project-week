import React from "react";
import { NoteCardWrapper } from "../styles";

const NoteCard = ({ note }) => (
  <NoteCardWrapper>
    <h3>
      {note.title.split("").length > 15
        ? note.title
            .split("")
            .splice(0, 15)
            .join("")
            .concat("...")
        : note.title}
    </h3>
    <p>
      {note.textBody.split("").length > 150
        ? note.textBody
            .split("")
            .splice(0, 100)
            .join("")
            .concat("...")
        : note.textBody}
    </p>
  </NoteCardWrapper>
);

export default NoteCard;
