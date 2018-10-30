import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NoteList = props => {
  console.log("notelist props:", props);
  return (
    <NoteListContainer>
      <H2>Your Notes:</H2>
      <NoteCardContainer>
        {props.notes.map(note => (
          <NoteCard>
            <NavLink key={note.id} to={`/${note.id}`}>
              <H3>{note.title}</H3>
              <P>{note.textBody} ...</P>
            </NavLink>
          </NoteCard>
        ))}
      </NoteCardContainer>
    </NoteListContainer>
  );
};

const NoteListContainer = styled.div`
  margin: 10px 0 0 250px;
`;

const H2 = styled.h2`
  font-size: 1.25rem;
`;

const NoteCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const NoteCard = styled.div`
    border: 1px solid grey;
    margin: 10px 1.1%;
    width: 29.75%
    height: 195px;
`;

const H3 = styled.h3`
  margin: 11px 11% 0 8%;
  font-size: 1.2rem;
  border-bottom: 2px solid grey;
  padding-bottom: 4px;
  color: black;
  text-decoration: none;
`;

const P = styled.p`
  color: black;
  margin: 7px 0 0 8%;
  font-size: 0.9rem;
  width: 80%;
  line-height: 21px;
  text-decoration: none;
`;

export default NoteList;
