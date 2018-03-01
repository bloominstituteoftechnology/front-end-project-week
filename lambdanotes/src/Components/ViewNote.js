import React from 'react';
import { Link } from 'react-router-dom';

const ViewNote = (props) => {
    return (
        <div>
            <form onSubmit={props.noteDelete}>
           <button type="submit">Delete</button>
            </form>
            <form onSubmit={props.updateNote}>
            <button type="submit">Update</button>
            </form>
            <h1>{props.note}</h1>
            <p>{props.details}</p>
        </div>
    )
}


export default ViewNote; 