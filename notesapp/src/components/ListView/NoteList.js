import React from 'react'
import Note from './Note'
import {NoteListDiv, NoteListContainer, NoteListTitle} from '../../Styles/NoteViewStyles'


const NoteList = props => {
    return (
        
        <NoteListContainer>
        <NoteListTitle>Your Notes:</NoteListTitle>

        <NoteListDiv>
            {props.notes.map(note => {
                return (
                    <Note 
                    note={note} 
                    key={note.id}
                    id={note.id}
                   />
                )
            })}
        </NoteListDiv>
        
        </NoteListContainer>
    )
}

export default NoteList