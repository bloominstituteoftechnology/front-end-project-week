import React from 'react'
import './NoteCard.css'

const NoteCard = (props) => {
    return (
        <div className="card-ctn">
            {props.notes.length > 0 ?
                props.notes.map(note => {
                    return (
                        <div className="card" key={note.id} >
                            <h3>{note.title}</h3>
                            <p>{note.description}</p>
                        </div>
                    )
                })
                :
                <div>No Notes</div>
            }
        </div>
    )
}

export default NoteCard;