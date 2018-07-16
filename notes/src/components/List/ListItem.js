import React from 'react';

const ListItem = props => {

  const gotoNoteView = () => {
    window.location.href = `/note/${props.note.id}`;
  };

  return (
    <li className="list-item" onClick={gotoNoteView}>
      <span className="list-item__title">{props.note.title}</span>
      <span className="list-item__content">{props.note.noteContent}</span>
    </li>
  );
};

export default ListItem;