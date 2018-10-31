// this is where the notes are styled on the main page

import React from 'react';
import Note from './Note';
import styled from 'styled-components';



 const SecondaryHeading = styled.h2`
  margin-bottom: 2rem;
`;
 const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 18rem;
`;
 const AllNotes = ({ notes }) => {
  return (
    <div>
      <SecondaryHeading>Your Notes:</SecondaryHeading>
      <CardsContainer>
        {notes.map(note => (
          <Note note={note} key={note.id} />
        ))}
      </CardsContainer>
    </div>
  );
};
 export default AllNotes;