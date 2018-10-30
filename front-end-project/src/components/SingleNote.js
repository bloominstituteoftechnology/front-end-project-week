import React from "react"
import './component.css'
import { Link } from 'react-router-dom';

const SingleNote = ({ note, history, deleteNote }) => {

    return (
        <div className="single-note">
            <div className="delete-edit">
                <Link to={`/edit-Note/:id`}><h1>Edit</h1></Link>
                <h1 onClick={() => {
                    console.log("note_id", note._id)
                    deleteNote(note._id);
                    history.push('/note-list')
                }}>Delete</h1>
            </div>
            <h1 className="single-title">
                {note && note.title}
            </h1>
            <p className="single-para">
                {note && note.textBody}
            </p>
        </div>
    )
}

export default SingleNote;