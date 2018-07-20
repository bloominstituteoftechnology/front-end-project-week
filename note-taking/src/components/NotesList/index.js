import React from "react";
import CardNotes from '../CardNotes';
import { Link } from 'react-router-dom';

const NotesListItem = ({ notes }) => (
  <li key={notes.id}>
     <Link to=`/:${notes.id}`><CardNotes/></Link>
  </li>
);

const NotesList = props => {
  return (
    <div>
      <ul>
        {props.items.map(notes => (
          <NotesListItem notes={notes} key={notes.id} />
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
