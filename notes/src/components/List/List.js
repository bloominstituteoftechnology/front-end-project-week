import React from 'react';
import ListItem from './ListItem';

const List = props => {
  return (
    <ul className="list">
      {props.notes.map(note => {
        return <ListItem key={note.id} note={note} />
      })}
    </ul>
  );
}

export default List;