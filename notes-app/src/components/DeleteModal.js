import React from 'react';
import { Link } from 'react-router-dom';

function DeleteModal(props){
    return (
        <div>
            <div onClick={props.deleteNote(props.note._id)}>
                <Link to="/notes">Delete</Link>
            </div>
            <div>
                <Link to="/notes/:id">Cancel</Link>
            </div>
        </div>
    )
}

export default DeleteModal;