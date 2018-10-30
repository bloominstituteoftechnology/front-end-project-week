import React from "react";

import { NoteCardWrapper } from "../styles";

import { Link } from "react-router-dom";

const NoteCard = ({ note }) => (
  <NoteCardWrapper>
    <Link to={`/notes/${note._id}`}>
    <h3>
      {note.title.split("").length > 10
        ? note.title
            .split("")
            .splice(0, 10)
            .join("")
            .concat("...")
        : note.title}
    </h3>
    <p>
      {note.textBody.split("").length > 100
        ? note.textBody
            .split("")
            .splice(0, 100)
            .join("")
            .concat("...")
        : note.textBody}
    </p>
    </Link>
  </NoteCardWrapper>
);

export default NoteCard;
