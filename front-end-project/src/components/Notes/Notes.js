import React, { Component, Fragment } from "react";
import Note from "./Note";
import styled from "react-emotion";

const Notes = props => {
  const { notes, selectedTheme } = props;
  
  return (
    <Fragment>
      <h2>Your Notes:</h2>
      <NotesDiv >
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
`;

export default Notes;
