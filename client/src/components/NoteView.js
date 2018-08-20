import React from 'react';
import styled from 'styled-components';
import { SecondaryHeading } from '../styles';

const TextContent = styled.div`
  white-space: pre-wrap;
  text-align: justify;
  max-width: 75%;
`;

const NoteView = ({ note: { id, title, textBody } }) => {
  return (
    <div>
      <SecondaryHeading>{title}</SecondaryHeading>
      <TextContent>{textBody}</TextContent>
    </div>
  );
};

export default NoteView;
