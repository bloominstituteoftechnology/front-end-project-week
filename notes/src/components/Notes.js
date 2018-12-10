import React from 'react';

const Notes = props => {
    return(
        <div className='posts-container'>
            <h1>Notes Component</h1>

            {props.notes.map(n => <p>{n.title}</p>)}
        </div>
    )
}

export default Notes;