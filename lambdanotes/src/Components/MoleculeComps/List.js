import React from 'react';
import { Card } from '../AtomComps/Card';

export const List = props => {
  return (
    <div className="List">
      {props.notes.map((note, index) => {
        return (
          <Card
            key={note + index}
            getNoteInfo={props.getNoteInfo}
            id={note.id}
            title={note.title}
            content={note.content}
          />
        );
      })}
    </div>
  );
};
