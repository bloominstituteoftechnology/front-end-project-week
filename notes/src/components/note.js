import React from "react";
import { Link } from "react-router-dom";

export const Note = props => {
  return (
    <div className="note">
      {props.note.title}

      {props.note.textBody}
    </div>
  );
};
