import React from 'react';
import Note from './Note';
import styled from 'styled-components';


 const SecondaryHeading = styled.h2`
  margin-bottom: 2rem;
`;
 const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1.5rem;
`;
 const CardContainer = ({ notes }) => {
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
 export default CardContainer;