import React from 'react';
import { Route } from 'react-router-dom';
import AllNotes from './AllNotes.js';
import SingleNote from './SingleNote.js';
import EditNoteForm from './EditNoteForm.js';
import NewNoteForm from './NewNoteForm.js'

const NotesContainer= props => {
   
    return (
    <div>
 
     <Route exact path='/' component={AllNotes}/>
     <Route exact path='/notes/:id' component={SingleNote}/>
     <Route exact path='/NewNote' component={NewNoteForm}/>
     <Route exact path='/EditNoteForm/:id' render ={matchHistoryLocationProps => <EditNoteForm {...matchHistoryLocationProps} editedNoteBodyHandler={props.editedNoteBodyHandler}
     editedNoteHandler={props.editedNoteBodyHandler} editedNoteTitleHandler={props.editedNoteTitleHandler}/>}/>   
    </div>
    )
}
export default NotesContainer;
