import React from 'react';
import { Route } from 'react-router-dom';
import AllNotes from './AllNotes.js';
import SingleNote from './SingleNote.js';

const NotesContainer= props => {
   
    return (
    <div>
     <Route exact path='/' component={AllNotes}/>
     <Route exact path='/notes/:id' component={SingleNote}/>
    </div>
    )
}
export default NotesContainer;
// 