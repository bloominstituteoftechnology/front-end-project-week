import React from 'react';
import NoteCard from "./NoteCard";
const Note = (notes) => {
    console.log("Note", notes.notes)
    return (
        <div>
            <NoteCard notes={notes.notes}/>
            </div>
    )
}
 
export default Note;