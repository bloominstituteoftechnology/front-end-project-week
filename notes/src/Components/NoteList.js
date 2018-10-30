import React from "react";
import "./Components.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NoteList = props => {
  if (!props.notes) {
    return <div>Notes are loading...</div>;
  }

  // refactor and slice the notes so that it displays Elipses if the note title is too long
  props.notes.forEach(note => {
    // slice the regular case note title
    if (note.title.length > 14) {
      note.title = note.title.slice(0, 14) + "...";
    }
    // slice the uppercase note title
    if (note.title.length > 10 && note.title === note.title.toUpperCase()) {
      note.title = note.title.slice(0, 10) + "...";
    }
    // slice the  regular case note body
    if (note.body.length > 110) {
      note.body = note.body.slice(0, 110) + "...";
    }
    // slice the uppercase note body
    if (note.body.length > 92 && note.body === note.body.toUpperCase()) {
      note.body = note.body.slice(0, 92) + "...";
    }
  });

  // reverses note array
  const notes = props.notes.slice().reverse();
  return (
    <MainContainer>
      <h2>Your Notes:</h2>
      <NotePreviewsContainer>
        {notes.map(note => {
          return (
            <Link to={`/view/${note.id}`} key={note.id}>
              <NotePreviewContainer>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </NotePreviewContainer>
            </Link>
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
  padding: 20px 35px 20px 35px;
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
  justify-content: space-between;
`;

const NotePreviewContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #979797;
  box-sizing: border-box;
  padding: 5px 15px;
  margin: 10px 0;
  background: #ffffff;
  word-break: break-all;
  overflow-wrap: break-word;
  :hover {
    border: 2px solid #979797;
  }
  h3 {
    border-bottom: 1px solid #979797;
    padding: 0 0 5px 0;
    margin: 5px 0 0 0;
  }
  p {
    margin: 8px 0;
  }
`;

export default NoteList;
