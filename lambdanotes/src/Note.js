import React from 'react';

const Note = (props) => {
    return (
        <li className='Note'>
        <h5>{note.title}</h5>
        <div>{note.content}</div>
        </li>
    )
}
export default Note