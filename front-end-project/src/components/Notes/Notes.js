import React, { Component, Fragment } from "react";
import Note from "./Note";
import styled from "react-emotion";
import { TransitionGroup } from "react-transition-group";
import Transition from "react-transition-group/Transition";
import { TweenMax } from "gsap";
import Sort from "../Sort/Sort";
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import dragula from 'react-dragula'

dragula([document.getElementById('container')]);

const Notes = props => {
  const { notes, selectedTheme } = props;
  
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
       {notes.length ===0 && <EmptyNoteTitle className= {'stagger'}data-theme={selectedTheme}>No Notes Available</EmptyNoteTitle>}
      <NotesDiv data-theme={selectedTheme} id="container" >
        {notes.map(note => (
          <Note note={note} selectedTheme={selectedTheme} {...props} key={note._id}/>
            

        ))}
      </NotesDiv>
    </Fragment>
  );
};

const NotesDiv = styled('div')`
justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`;

const NoteTitle = styled("h2")`
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`;

const EmptyNoteTitle = styled(NoteTitle)`
text-align:center;
`

export default Notes;
