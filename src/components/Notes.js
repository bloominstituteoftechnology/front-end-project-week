import React from 'react';
import Note from './Note';

export default ({notes, onDelete=() => {}}) => (
  <ul>{notes.map(({id, title, textBody}) =>
    <li key={id}>
      <Note
        onDelete={onDelete.bind(null, id)}
        title={title}
        textBody={textBody} />
    </li>
  )}</ul>
)

