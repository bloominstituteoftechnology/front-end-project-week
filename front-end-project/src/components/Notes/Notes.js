import React, { Component, Fragment } from "react";
import Note from "./Note";
import styled from "react-emotion";
import { TransitionGroup } from "react-transition-group";
import Transition from "react-transition-group/Transition";
import { TweenMax } from "gsap";

const Notes = props => {
  const { notes, selectedTheme } = props;

  return (
    <Fragment>
      <NoteTitle data-theme={selectedTheme}>Your Notes:</NoteTitle>
      <NotesDiv data-theme={selectedTheme} className={}>  
      <Transition appear={true} timeout={1000} unmountOnExit>
          {state => {
              switch (state) {
                case 'entering':
                  TweenMax.staggerFromTo('.note', 0.5, {opacity:0, x:75}, {opacity:1, x:0}, 0.1)
                case 'entered':
                  return null;
                case 'exiting':
                  return 'Exiting…';
                case 'exited':
                  return 'Exited!';
              }
            }}
          </Transition>     
          
          {notes.map(note => (
            <Fragment>
              
            <Note note={note} selectedTheme={selectedTheme} {...props} />
            </Fragment>
          ))}        
      </NotesDiv>
    </Fragment>
  );
};

const NotesDiv = styled(TransitionGroup)`
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`;

const NoteTitle = styled("h2")`
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`;

export default Notes;
