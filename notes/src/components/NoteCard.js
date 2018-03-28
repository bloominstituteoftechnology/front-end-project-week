import React from 'react';
import { Route } from 'react-router-dom';
import './NoteCard.css';

const NoteCard = () => {
  let id = 0;
  return (
    <Route render={({ history }) => (
      <div className="cardContainer" onClick={() => { history.push(`/notes/${id}`) }}>
        <h2 className="cardHeader">Note Title</h2>
          <p className="cardBody truncate">Morbi pellentesque
            euismod venenatis. Nulla ut nibh nunc. Phasellus
            diam metus, blandit ac purus a, efficitur mollisMorbi pellentesque
              euismod venenatis. Nulla ut nibh nunc. Phasellus
              diam metus, blandit ac purus a, efficitur molli
          </p>
      </div>
    )} />
  );
};

export default NoteCard;
