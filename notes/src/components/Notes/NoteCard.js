import React from 'react'
import { Link } from 'react-router-dom'
import './NoteCard.css'
const NoteCard = (props) => {
    return (
        <div className="card-ctn">
            {props.notes.length > 0 ?
                props.notes.map(note => {
                    return (
                        <Link key={note.id} to={`view/${note.id}`} style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <h3>{note.title}</h3>
                                <p>{note.content}</p>
                            </div>
                        </Link>
                    )
                })
                :
                <div>No Notes</div>
            }
        </div>
    )
}

export default NoteCard;