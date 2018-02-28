import React from 'react';
import './NoteItem.css';

const NoteItem = (props) => {
  const processRedirect = () => {
    window.location.href = `http://localhost:3000/notes/${props.id}`;
  };

  return (
    <div className="note" onClick={processRedirect}>
      <div className="note__title">{props.title}</div>
      <div className="note__content">{props.content}</div>
      <div className="note__hide-overflow" />
    </div>
  );
};

export default NoteItem;
