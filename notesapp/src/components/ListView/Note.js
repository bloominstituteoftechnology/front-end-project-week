import React from 'react'
import {NoteDiv, NoteH2, BorderDiv, NoteText} from '../../Styles/NoteViewStyles'

const Note = props => {
    const {title, textBody, tags, _id} = props.note
    return (
        <NoteDiv >
            <NoteH2>{title}</NoteH2>
            <BorderDiv></BorderDiv>
            <NoteText>{textBody}</NoteText>
            <span>tags: {tags}</span>

        </NoteDiv>
    )
}

export default Note;