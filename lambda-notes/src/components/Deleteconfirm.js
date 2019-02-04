import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

function deleteNote(id) {
    axios
    .delete(`https://agile-savannah-13496.herokuapp.com/api/notes/${id}`)
    .catch(err => console.log(err))
} 

const DeleteConfirm = props => {
    return (
        <div className={props.deleteConfirm ? 'showDelete' : 'hide-delete'}>
            <div>
                <h2>DELETE?</h2>
            </div>
            <div className="delete-buttons">
                <Link to='/'><button className="delete" onClick={deleteNote(props.id)}>DELETE</button></Link>
                <button className="cancelDelete" onClick={props.toggleDelete}>No</button>
            </div>
        </div>
    );
}

export default DeleteConfirm;