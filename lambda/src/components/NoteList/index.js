import React from 'react';
import '../components.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoteList = props => {
  if (!props.notes) {
    return <div>Notes are loading...</div>;
  }

  props.notes.forEach(note => {
    if (note.title.length > 14) {
      note.title = note.title.slice(0, 14) + '...';
    }

    if (note.title.length > 10 && note.title === note.title.toUpperCase()) {
      note.title = note.title.slice(0, 10) + '...';
    }

    if (note.textBody.length > 110) {
      note.textBody = note.textBody.slice(0, 110) + '...';
    }

    if (
      note.textBody.length > 92 &&
      note.textBody === note.textBody.toUpperCase()
    ) {
      note.textBody = note.textBody.slice(0, 92) + '...';
    }
  });

  const notes = props.notes.slice().reverse();

  return (
    <MainContainer>
      <h2>Your Notes:</h2>
      <NotePreviewsContainer>
        {notes.map(note => {
          return (
            <NotePreviewContainer>
              <Link to={`/notes/${note._id}`} key={Math.random()}>
                <h2>{note.title}</h2>
              </Link>
              <p>{note.textBody}</p>
            </NotePreviewContainer>
          );
        })}
      </NotePreviewsContainer>
    </MainContainer>
  );
};

NoteList.defaultProps = {
  notes: []
};

export const MainContainer = styled.div`
  width: 750px;
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  padding: 20px;

  h2 {
    font-size: 23px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

const NotePreviewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const NotePreviewContainer = styled.div`
  /* flex-grow: 1; */
  width: 30.5%;
  height: 200px;
  border: 1px solid #979797;
  box-sizing: border-box;
  padding: 5px 15px;
  margin: 10px 10px;
  background: #ffffff;
  word-break: break-all;
  overflow-wrap: break-word;

  :hover {
    border: 2px solid #979797;
  }

  h2 {
    border-bottom: 1px solid #979797;
    padding: 0 0 5px 0;
    margin: 5px 0 0 0;
  }

  p {
    margin: 8px 0;
  }
`;

export default NoteList;
