import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const NoteCard = props => {
  return (
    <article name={props.note._id}>
      <header>
        <Link to={`/${props.note._id}`} name={props.note._id}>
          {props.note.title}
        </Link>
      </header>
      <hr />
      <p>{props.note.textBody}</p>
    </article>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteCard;
