import React from 'react'
import { NotesContext } from '../contexts/NotesProvider'

const Note = (props) =>{

    const {id} = props.match.params;

    return (
        <div>
        <NotesContext.Consumer>
            {data =>{
                const notesArray = data.state.notes
                let currNote = notesArray.find(note => note._id === id);
                console.log('Note.js',currNote.title);
            return (
                <>
                    <h1>{currNote.title}</h1>
                    <p>{currNote.textBody}</p>
                </>
            )


        }}
        </NotesContext.Consumer>

        </div>

    )
}

export default Note