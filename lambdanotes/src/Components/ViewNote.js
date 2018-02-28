import React from 'react';

const ViewNote = (props) => {
    return (
        <div>
            <button onSubmit={props.noteDelete}>Delete</button>
            <button id={props.id}>Update</button>
            <h1>{props.note}</h1>
            <p>{props.details}</p>
        </div>
    )
}

export default ViewNote; 