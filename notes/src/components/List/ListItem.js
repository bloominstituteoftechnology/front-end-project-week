import React from 'react';

const ListItem = props => {
  return (
    <li className="list-item">
      <span className="list-item__title">{props.note.title}</span>
      <span className="list-item__content">{props.note.noteContent}</span>
    </li>
  );
};

export default ListItem;