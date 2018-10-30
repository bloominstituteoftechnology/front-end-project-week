import React from "react"
import './component.css'
import { Link } from 'react-router-dom';

const SingleNote = ({ note, history, deleteNote, goToEditForm }) => {

    return (
        <div className="single-note">
            <div className="delete-edit">
                <h1 onClick={(ev)=> {goToEditForm(ev, note._id)
                history.push(`/edit-Note/${note._id}`)}}>Edit</h1>
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