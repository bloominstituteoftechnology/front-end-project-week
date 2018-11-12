import React from 'react';
import Note from './Note'

const NoteList = () => {
    return(
    <div className= "note-list-container">
    <h2>Your Notes:</h2>
    <Note />
    <Note />
    <Note />
    

  </div>
    )
}

export default NoteList;