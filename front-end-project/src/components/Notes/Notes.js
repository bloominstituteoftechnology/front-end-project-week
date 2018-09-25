import React, { Component, Fragment } from "react";
import Note from "./Note";
import styled from "react-emotion";

const Notes = props => {
  const { notes, selectedTheme } = props;
  
  return (
    <Fragment>
      <NoteTitle data-theme={selectedTheme}>Your Notes:</NoteTitle>
      <NotesDiv data-theme={selectedTheme}>
        {notes.map(note => (
          <Note note={note} selectedTheme={selectedTheme} {...props}/>
        ))}
      </NotesDiv>
    </Fragment>
  );
};

const NotesDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`;

const NoteTitle = styled('h2') `
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`

export default Notes;
