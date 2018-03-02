import React from 'react';

const ViewNote = (props) => {
    return (
        <div>
            <button type='submit'>delete</button>
            <button type='submit'>update</button>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
        )
}

export default ViewNote;