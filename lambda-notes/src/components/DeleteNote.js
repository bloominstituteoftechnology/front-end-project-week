import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const DeleteNote = ({ match, deleteNote }) => {
    return (
        <div className='delete-view'>
            <div className='prompt'>
                <h4>Are you sure you want to delete this?</h4>
                <button style={{backgroundColor: '#c80823'}}><NavLink to='/' className="button" style={{backgroundColor: '#c80823'}} onClick={() => deleteNote(match.params.id)}>Delete</NavLink></button>
                <button><NavLink to={`/note/${match.params.id}`} className="button">No</NavLink></button>
            </div>
        </div>
    )

}


export default DeleteNote;