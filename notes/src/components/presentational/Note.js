import React from 'react';

import { NoteStyle } from '../style/noteStyle';

function Note(props) {
  const description = props.note.description;

  return (
    <NoteStyle>
      <h3>{props.note.title}</h3>
      <p>{description.length > 140? `${description.slice(0,140)}...`: description}</p>
    </NoteStyle>
  )
}

export default Note;