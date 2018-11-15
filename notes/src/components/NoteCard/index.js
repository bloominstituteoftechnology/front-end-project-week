import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import './notecard.css';

const NoteCard = props => {
  return (
    <Link to={`/${props.note._id}`} name={props.note._id} className='note'>
      <h2>
          {props.note.title}
      </h2>
      <hr />
      <p>{props.note.textBody}</p>
    </Link>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteCard;
