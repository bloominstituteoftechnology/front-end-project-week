import React, { Component, Fragment } from "react";
import Note from "./Note";
import styled from "react-emotion";
import { TransitionGroup } from "react-transition-group";
import Transition from "react-transition-group/Transition";
import { TweenMax } from "gsap";
import Sort from "../Sort/Sort";

const Notes = props => {
  const { notes, selectedTheme } = props;
  console.log(notes);
  return (
    <Fragment>
      <Sort {...props} />
      {/* <Transition
        in={props.match.url === "/notes"}
        appear={true}
        timeout={1000}
      >
        {state => {
          switch (state) {
            case "entering":
              TweenMax.staggerFromTo(
                ".stagger",
                0.1,
                { opacity: 0, x: 25, boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.0)' },
                { opacity: 1, x: 0, boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.2)' },
                
                0.1
              );
            case "entered":
              return null;
            case "exiting":
              TweenMax.to("stagger", 0.5, { opacity: 0 });
              return null;
            case "exited":
              return null;
          }
        }}
      </Transition> */}
      <NoteTitle data-theme={selectedTheme}>Your Notes:</NoteTitle>
      <NotesDiv data-theme={selectedTheme}>
        {notes.map(note => (
          <Note note={note} selectedTheme={selectedTheme} {...props}>
            
          </Note>
        ))}
      </NotesDiv>
    </Fragment>
  );
};

const NotesDiv = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`;

const NoteTitle = styled("h2")`
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`;

export default Notes;
