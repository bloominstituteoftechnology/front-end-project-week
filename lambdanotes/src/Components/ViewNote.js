import React from 'react';

const ViewNote = (props) => {
    return (
        <div>
            <h1>{props.note}</h1>
            <p>{props.details}</p>
        </div>
    )
}

export default ViewNote;