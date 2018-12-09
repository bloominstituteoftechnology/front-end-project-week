import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const DivNotes = styled.div`
  border: 1px solid red;
`;

const Notes = props => {
  return (
    <DivNotes>
      <h2 style={{display: 'inline'}}>Your Notes:</h2>
      {props.notes.map(note => (
        <Link key={note.id} to={`/note/${note.id}`}>
          <h2>{note.title}</h2>
          <h3>{note.textBody}</h3>
        </Link>
      ))}
    </DivNotes>
  );
};

export default Notes;
