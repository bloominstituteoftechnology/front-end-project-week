// this is where the notes are styled on the main page

import React from 'react';
import Note from './Note';
import styled from 'styled-components';



 const SecondaryHeading = styled.h2`
  margin-bottom: 2rem;
  text-decoration: none;
  color: black;
`;
 const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 18rem;
  color: black;

`;
 const AllNotes = ({ notes }) => {
  return (
    <div>

      <CardsContainer>
        {notes.map(note => (
          <Note note={note} key={note._id} />
        ))}
      </CardsContainer>
    </div>
  );
};
 export default AllNotes;