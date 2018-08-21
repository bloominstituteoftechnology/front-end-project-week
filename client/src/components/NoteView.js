import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SecondaryHeading } from '../styles';

const NoteContainer = styled.div`
  max-width: 75%;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
`;

const NoteHeading = SecondaryHeading.extend`
  flex: 1;
`;

const TextContent = styled.div`
  white-space: pre-wrap;
  text-align: justify;
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited,
  &:active {
    color: inherit;
  }
  margin-right: 1rem;
`;

const ButtonLink = styled.button`
  font-size: inherit;
  font-family: inherit;
  text-decoration: underline;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const NoteView = ({ note: { id, title, textBody }, onDelete, history }) => {
  return (
    <NoteContainer>
      <TopBar>
        <NoteHeading>{title}</NoteHeading>
        <StyledLink to={`/notes/${id}/edit`}>edit</StyledLink>
        <ButtonLink
          onClick={() => {
            onDelete(id);
            history.push('/');
          }}
        >
          delete
        </ButtonLink>
      </TopBar>
      <TextContent>{textBody}</TextContent>
    </NoteContainer>
  );
};

export default NoteView;
