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



// const Notes = props => {
//   const { notes, selectedTheme, pagination } = props;
//   console.log(pagination);
//   return (
//     <Fragment>
      
//       <Sort {...props} />      
//       <NoteTitle data-theme={selectedTheme}>Your Notes:</NoteTitle>
//        {notes.length ===0 && <EmptyNoteTitle className= {'stagger'}data-theme={selectedTheme}>No Notes Available</EmptyNoteTitle>}
//       <NotesDiv data-theme={selectedTheme} id="container" >
//         {notes.slice(0,pagination).map(note => (
//           <Note note={note} selectedTheme={selectedTheme} {...props} key={note._id}/>  

            

//         ))}
//         {pagination < notes.length && <NoteButton data-theme={selectedTheme} onClick={props.loadPagination}>Load More</NoteButton>}
//       </NotesDiv>
//     </Fragment>
//   );
// };

class Notes extends Component {
  componentWillUnmount(){
    this.props.resetPagination()
  }

  render(){
    const { notes, selectedTheme, pagination } = this.props;
  console.log(pagination);
  return (
    <Fragment>
      
      <Sort {...this.props} />      
      <NoteTitle data-theme={selectedTheme}>Your Notes:</NoteTitle>
       {notes.length ===0 && <EmptyNoteTitle className= {'stagger'}data-theme={selectedTheme}>No Notes Available</EmptyNoteTitle>}
      <NotesDiv data-theme={selectedTheme} id="container" >
        {notes.slice(0,pagination).map(note => (
          <Note note={note} selectedTheme={selectedTheme} {...this.props} key={note._id}/>  

            

        ))}
        {pagination < notes.length && <NoteButton data-theme={selectedTheme} onClick={this.props.loadPagination}>Load More</NoteButton>}
      </NotesDiv>
    </Fragment>
  )
  }
}

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

const NoteButton = styled("div")`
  cursor: pointer;
  margin: 10px 0;
  text-align: center;
  color: ${props => props.theme[props["data-theme"]].subBackground};
  background: ${props => props.theme[props["data-theme"]].button};

  padding: 10px;
  width: 200px;
  font-weight: bold;

  transition: transform 0.2s ease-in-out;
  
`;

export default Notes;
