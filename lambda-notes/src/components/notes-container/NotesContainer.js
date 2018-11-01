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
const NotesContainer= props => {
   
    return (
    <NotesWrap>
 
     <Route exact path='/' component={AllNotes}/>
     <Route exact path='/notes/:id' component={SingleNote}/>
     <Route exact path='/NewNote' component={NewNoteForm}/>
     <Route exact path='/EditNoteForm/:id' render ={matchHistoryLocationProps => <EditNoteForm {...matchHistoryLocationProps} editedNoteBodyHandler={props.editedNoteBodyHandler}
     editedNoteHandler={props.editedNoteBodyHandler} editedNoteTitleHandler={props.editedNoteTitleHandler}/>}/>   
    </NotesWrap>
    )
}
export default NotesContainer;
