import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const NoteList = ({ notes }, props) => {
    return (
        <div>
            {notes.map(note => {
                return (
                    <article key={note._id}>
                        <h2>Title: {note.title}</h2>
                        <p>{note.textBody}</p>
                        <p>{moment().format('MMM Do YY')}</p>
                    </article>
                )
            })}
        </div>
    )
}

export default NoteList
