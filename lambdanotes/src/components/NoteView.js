import React from 'react'

const NoteView = props => {
    return (
        <div>
            <h2>Title: {props.note.title} </h2>
            <p>Text Body: {props.note.textBody}</p>
            <p>ID: {props.note._id}</p>
            <p>Double_Underscore_V: {props.note.__v}</p>
        </div>
    )
}

export default NoteView