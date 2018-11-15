import React from 'react'



const NoteView = props => {
    const id = props.note._id

    const handleDelete = event => {
        event.preventDefault();
        props.handleDeleteNote(id)
    }

    return (
        <div key={props.note._id}>
            <h2>Title: {props.note.title} </h2>
            <p>Text Body: {props.note.textBody}</p>
            <p>ID: {props.note._id}</p>
            <p>Double_Underscore_V: {props.note.__v}</p>
            <div style={{cursor: "pointer"}} onClick={handleDelete}> X </div>
        </div>
    )
}

export default NoteView