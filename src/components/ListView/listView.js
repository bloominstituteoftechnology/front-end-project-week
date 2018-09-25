import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-height: 100vh;
  width: 100%;
  height: auto;
  background-color: #f2f0f2;
`;

const NotesContainerH2 = styled.h2`
  display: block;
  font-size: 1.5em;
  width: 100%;
  font-weight: bold;
  padding-left: 2%;
  padding-top: 50px;
  
`;

const NotesListView = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 30%;
  border-radius: 5px;
  height: 200px;
  margin: 15px 0;
  text-align: left;
  word-wrap: break-word;
  background-color: #ffffff;
  overflow: hidden;
`;

const NoteTitle = styled.h3`
  font-weight: bold;
  border-bottom: 1px solid #d0d0d0;
  width: 90%;
  height:15%
  margin: 10px auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: baseline;
  &:Hover {
    cursor: pointer;
  }
`;

const NoteBody = styled.p`
  color: black;
  text-decoration: none;
  width: 90%;
  height: 85%;
  margin: 0 auto;
  overflow: hidden;
  white-space: normal;
  text-overflow: hidden;
  &:Hover {
    cursor: pointer;
  }
`;

const ListView = props => {
  return (
    <NotesContainer>
      <NotesContainerH2>Your Notes:</NotesContainerH2>
      {props.notes.map(note => {
        return (
          <NotesListView key={note._id}>
            <NoteTitle onClick={() => props.history.push(`/notes/${note._id}`)}>
              {note.title}
            </NoteTitle>
            <NoteBody onClick={() => props.history.push(`/notes/${note._id}`)}>{note.textBody}</NoteBody>
          </NotesListView>
        );
      })}
    </NotesContainer>
  );
};

export default ListView;
