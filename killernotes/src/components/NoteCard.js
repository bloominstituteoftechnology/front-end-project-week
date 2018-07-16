import React from 'react';

const NoteCard = props => (
  <div>
    {props.note.title}
    <hr />
    {props.note.textBody}
  </div>
);

export default NoteCard;
