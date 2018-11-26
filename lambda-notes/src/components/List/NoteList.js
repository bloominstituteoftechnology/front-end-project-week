import React from 'react'
import Note from './Note'
import {NoteListDiv, NoteContainer, NoteTitle} from '../../Styles/NoteViewStyles';

const NoteList = props => {
    return (
        <NoteContainer>
        <NoteTitle>Your Notes:</NoteTitle>
        <NoteListDiv>
            {props.notes.map(note => {
                console.log(note)
                return (
                    <Note note={note} key={note._id}
                    _id={note._id}/>
                )
            })}
        </NoteListDiv>
        </NoteContainer>
    )
}

export default NoteList