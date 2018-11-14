import React from "react";
import PropTypes from "prop-types";

const NoteCard = props => {
  return (
    <article name={props.note.id}>
      <header>{props.note.title}</header>
      <hr />
      <p>{props.note.textBody}</p>
    </article>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteCard;
