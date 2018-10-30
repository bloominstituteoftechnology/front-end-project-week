import React from 'react'
import moment from 'moment'

const NoteList = props => {
    const routeToNote = (id) => {
        props.history.push(`/note-list/${id}`)
        props.getNoteById(id)
    }
    return (
        <div>
            {props.notes.map(note => {
                return (
                    <div
                        onClick={() => {
                            routeToNote(note._id)
                        }}
                        key={note._id}
                    >
                        <article key={note._id}>
                            <h2>Title: {note.title}</h2>
                            <p>{note.textBody}</p>
                            <p>{moment().format('MMM Do YY')}</p>
                        </article>
                    </div>
                )
            })}
        </div>
    )
}

export default NoteList
