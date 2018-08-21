import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SecondaryHeading } from '../styles';

const NoteContainer = styled.div`
  max-width: 75%;
`;

const TopBar = styled.div`
  display: flex;
`;

const NoteHeading = SecondaryHeading.extend`
  flex: 1;
`;

const TextContent = styled.div`
  white-space: pre-wrap;
  text-align: justify;
`;

const NoteView = ({ note: { id, title, textBody } }) => {
  return (
    <NoteContainer>
      <TopBar>
        <NoteHeading>{title}</NoteHeading>
        <Link to={`/notes/${id}/edit`}>edit</Link>
      </TopBar>
      <TextContent>{textBody}</TextContent>
    </NoteContainer>
  );
};

export default NoteView;
