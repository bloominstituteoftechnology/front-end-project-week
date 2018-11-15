import React from 'react'
import { NotesContext } from '../contexts/NotesProvider';


const ViewNotes = () =>{
    <NotesContext.Consumer>
        {data =>{
            const notes = data.state.notes;
            console.log('inviewnotes', notes);
        
        
            return (
                <div>View Notes!!</div>

            )
        }}
    </NotesContext.Consumer>

}

export default ViewNotes;
