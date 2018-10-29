import React from 'react'
import moment from 'moment'

const NoteList = props => {
    return (
        <div>
            {props.notes.map(note => {
                return (
                    <article key={note._id}>
                        <h2>Title: {note.title}</h2>
                        <p>{note.textBody}</p>
                        <p>{moment().format('MMM Do YY')}</p>
                        <button
                            onClick={() => {
                                props.deleteNote(note._id)
                            }}
                        >
                            Delete
                        </button>
                    </article>
                )
            })}
        </div>
    )
}

export default NoteList
