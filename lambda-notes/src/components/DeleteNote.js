import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const DeleteNote = ({ match }, props) => {
    return (
        <div className='delete-view'>
            <div className='prompt'>
                <h4>Are you sure you want to delete this?</h4>
                <NavLink to='/' className="button" onClick={() => props.deleteNote(match.params.id)}>Delete</NavLink>
                <NavLink to={`/note/${match.params.id}`} className="button">No</NavLink>
            </div>
        </div>
    )

}

export default DeleteNote;