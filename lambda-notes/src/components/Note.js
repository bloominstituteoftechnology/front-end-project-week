import React from 'react'

const Note = ({ activeNote, deleteNote, history, updateNote }) => {
    const [ note ] = activeNote
    if (!activeNote) {
        return <h2>Loading note...</h2>
    }

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.textBody}</p>
            <button
                onClick={e => {
                    updateNote(e, note)
                    history.push('/add-note')
                }}
            >
                Update
            </button>
            <button
                onClick={e => {
                    deleteNote(e, note._id)
                    history.push('/note-list')
                }}
            >
                Delete
            </button>
        </div>
    )
}

export default Note
