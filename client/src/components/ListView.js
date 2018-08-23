import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import { SecondaryHeading, LinkWrapper } from '../styles';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1.5rem;
`;

const ListView = ({ notes }) => {
  return (
    <div>
      <SecondaryHeading>Your Notes:</SecondaryHeading>
      <CardsContainer>
        {notes.map(note => (
          <Card note={note} />
        ))}
      </CardsContainer>
    </div>
  );
};

export default ListView;
