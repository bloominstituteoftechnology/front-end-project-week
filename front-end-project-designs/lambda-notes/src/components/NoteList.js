import React from 'react'
import moment from 'moment'

const NoteList = ({ notes }) => {
    return (
        <div>
            {notes.map(note => {
                return (
                    <article key={note.title}>
                        <h2>Title: {note.title}</h2>
                        <p>{note.text}</p>
                        <p>{moment().format('MMM Do YY')}</p>
                    </article>
                )
            })}
        </div>
    )
}

export default NoteList
