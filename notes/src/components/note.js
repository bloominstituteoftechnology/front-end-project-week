import React from 'react'
import "../css/note.css"

const Note = props => {
  return props.list.map((item, id) => (
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

export default Note;