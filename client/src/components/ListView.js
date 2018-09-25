import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { SecondaryHeading, LinkWrapper } from '../styles';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1.5rem;
`;

const ListView = ({ notes, ...rest }) => {
  return (
    <div>
      <SecondaryHeading>Your Notes:</SecondaryHeading>
      <CardsContainer>
        {notes.map((note, index) => (
          <Card
            key={note.id}
            note={note}
            id={note.id}
            index={index}
            {...rest}
          />
        ))}
      </CardsContainer>
    </div>
  );
};

export default DragDropContext(HTML5Backend)(ListView);
