import React from 'react';
import { Link } from 'react-router-dom';
import NoteThumbnail from './NoteThumbnail';
import styled from 'styled-components';

const NotesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 24px;
`;

const NoteList = props => (
  <NotesWrapper>
    {props.notes.map(note => (
      <Link key={note.id} to={`/note/${note.id}`}>
        <NoteThumbnail note={note} />
      </Link>
    ))}
  </NotesWrapper>
);

export default NoteList;
