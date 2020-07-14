import React from "react";

import { NoteCardWrapper } from "../styles";

import { Link } from "react-router-dom";

const NoteCard = ({ note }) => (
  <NoteCardWrapper>
    <Link to={`/notes/${note._id}`}>
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
            .splice(0, 150)
            .join("")
            .concat("...")
        : note.textBody}
    </p>
    </Link>
  </NoteCardWrapper>
);

export default NoteCard;
