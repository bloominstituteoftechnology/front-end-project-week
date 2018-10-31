import React from 'react'
import Note from './Note'
import {NoteListDiv, NoteListContainer, NoteListTitle} from '../../Styles/NoteViewStyles'
import {CSVLink} from 'react-csv'


const NoteList = props => {
    return (
        <NoteListContainer>
        <NoteListTitle>Your Notes:</NoteListTitle>
        <NoteListDiv>
            {props.notes.map(note => {
                return (
                    <Note note={note} key={note._id}
                    _id={note._id}/>
                )
            })}
        </NoteListDiv>
        <CSVLink data={props.notes} className="csvLink" filename={'my-notes.csv'}>Click here to download all notes as a CSV.</CSVLink>
        </NoteListContainer>
    )
}

export default NoteList