//rendered by App component
//mostly just passing props down 

import React from 'react';
import { Route } from 'react-router-dom';
import AllNotes from './AllNotes.js';
import SingleNote from './SingleNote.js';
import EditNoteForm from './EditNoteForm.js';
import NewNoteForm from './NewNoteForm.js'
import styled from 'styled-components'

const NotesWrap = styled.div `
width: 75%;
display: flex;
justify-content: flex-start;
flex-direction: column;
background-color: #F2F1F2;
padding: 0px;
`
const HeadlineWrap = styled.p `
font-size: 15px;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bold;
flex: 8;
text-align: left;
line-height: 20%;
color: #7B726C;
margin-left:12px;
margin-top:35px;
padding: 0px;
`;
const NotesContainer= props => {
    
    return (
    <NotesWrap>

     <HeadlineWrap>Your Notes:</HeadlineWrap>

     <Route exact path='/' render ={matchHistoryLocationProps =>
         <AllNotes {...matchHistoryLocationProps} notes={props.notes} />}/>

     <Route exact path='/notes/:id' render ={matchHistoryLocationProps => 
        <SingleNote {...matchHistoryLocationProps} deleteNote={props.deleteNote} 
        singleNote={props.singleNote} fetchNote={props.fetchNote}  handleInputChange={props.handleInputChange}/>}/>
     
     <Route exact path='/NewNote' render ={matchHistoryLocationProps => 
        <NewNoteForm {...matchHistoryLocationProps}   handleInputChange={props.handleInputChange}
      addNewNote={props.addNewNote} newTitle= {props.newTitle} newNote={props.newNote}/>}/>
     
     <Route exact path='/EditNoteForm/:id' render ={matchHistoryLocationProps => 
        <EditNoteForm {...matchHistoryLocationProps} editedTitle={props.editedTitle}
        singleNote={props.singleNote}
        editedNote={props.editedNote}
        handleInputChange={props.handleInputChange}
        fetchNote={props.fetchNote}
        editNote={props.editNote} />}/>   

    </NotesWrap>
    )
}
export default NotesContainer;
