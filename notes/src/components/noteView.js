import React from 'react'
import "../css/note.css"

const NoteView = props => {
  return props.notes.map((item, id) => (
    <li
      onClick={() => props.toggleComplete(item.id)}
      key={id}
      id={id}
      style={{
        textDecoration: item.completed ? 'line-through' : 'none'
      }}
    >
      {item.task}
    </li>
  ));
};

export default NoteView;