import React, { Component } from "react";
import { Link } from "react-router-dom";

import NoteCard from "./NoteCard";

import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(248, 249, 250);
  overflow-wrap: break-word;
  width: 100%;
`;

const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 15px;
`;

const NoteContainer = styled.div`
  flex: 0 1 20%;
  min-width: 275px;
  height: 300px;
  background-color: white;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  margin: 20px 25px 20px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Notes = props => {
  return (
    <Container>
      {/* <NotesHeader>Your Notes:</NotesHeader> */}
      <NotesContainer>
        {props.notes.map(note => {
          return (
            <NoteContainer key={note.id}>
              <Link
                to={`/notes/${note.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <NoteCard
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  text={note.textBody}
                  {...props}
                />
              </Link>
            </NoteContainer>
          );
        })}
      </NotesContainer>
    </Container>
  );
};

Notes.defaultProps = {
  notes: []
};

export default Notes;
