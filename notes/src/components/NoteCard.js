import React from 'react';
import { Route } from 'react-router-dom';
import './NoteCard.css';

const NoteCard = ({ title, body, id }) => {
  return (
    <Route render={({ history }) => (
      <div className="cardContainer" onClick={() => { history.push(`/notes/${id}`) }}>
        <h2 className="cardHeader">{title}</h2>
        <p className="cardBody truncate">{body}</p>
      </div>
    )} />
  );
};

export default NoteCard;
