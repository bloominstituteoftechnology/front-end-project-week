import React from "react";
import "./Components.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NoteList = props => {
  if (!props.notes) {
    return <div>Notes are loading...</div>;
  }

  // if the notes do exist then we can slice them and reverse them so that newest note is shown first
  const notes = props.notes.slice().reverse();
  return (
    <MainContainer>
      <h2>Your Notes:</h2>
      <NotePreviewsContainer>
        {notes.map(note => {
          return (
            <Link to={`/notes/${note._id}`} key={Math.random()}>
              <NotePreviewContainer>
                <h3>{note.title}</h3>
                <p>{note.textBody}</p>
              </NotePreviewContainer>
            </Link>
          );
        })}
      </NotePreviewsContainer>
    </MainContainer>
  );
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
