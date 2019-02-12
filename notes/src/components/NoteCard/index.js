import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./notecard.css";

const NoteCard = props => {
  return (
    <Link to={`/${props.note.id}`} name={props.note.id} className="note">
      <h2>{props.note.title}</h2>
      <hr />
      <p>{props.note.textBody}</p>
      <br />
      <p>{props.note.tags}</p>
    </Link>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteCard;
