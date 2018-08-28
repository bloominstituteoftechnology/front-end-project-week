import React from 'react';
import NoteCard from './NoteCard';
import styled from 'styled-components';
 const SecondaryHeading = styled.h2`
  margin-bottom: 2rem;
`;
 const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1.5rem;
`;
 const AllCards = ({ notes }) => {
  return (
    <div>
      <SecondaryHeading>Your Notes:</SecondaryHeading>
      <CardsContainer>
        {notes.map(note => (
          <NoteCard note={note} key={note.id} />
        ))}
      </CardsContainer>
    </div>
  );
};
 export default AllCards;