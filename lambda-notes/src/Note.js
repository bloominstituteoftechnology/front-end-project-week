import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
  const { id, title, textBody } = props;
  return (
    <Link to={`/notes/${id}`}>
      <table class="info">
      <h1 class="title">{title}</h1>
      <p class="bod">{textBody}</p>
      </table>
    </Link>
  );
};

export default Note;

