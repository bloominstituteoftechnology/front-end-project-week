import React from 'react';

const ViewNote = (props) => {
    return (
        <div>
            <button>Delete</button>
            <button>Update</button>
            <h1>{props.note}</h1>
            <p>{props.details}</p>
        </div>
    )
}

export default ViewNote; 