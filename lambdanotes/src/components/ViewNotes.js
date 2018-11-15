import React from 'react'
import { NotesContext } from '../contexts/NotesProvider';


const ViewNotes = () =>{
    return (
    <NotesContext.Consumer>
        {data =>{
            const noteData = data.state.notes;
            console.log('inviewnotes', notes);
        
            const notes = noteData.map(note =>{
                return <h1>{note.title}</h1>
            })
            return (
                notes
             
            )
        }}
    </NotesContext.Consumer>
    )
}

export default ViewNotes;
