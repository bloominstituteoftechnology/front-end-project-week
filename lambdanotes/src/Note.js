import React from 'react';
import { Link } from 'react-router-dom';

const Note = (props) => {
    return (
        <li className='Note'>
        <h5>{props.title}</h5>
        <div>{props.content}</div>
        <button>Edit</button>
        <button>Delete</button> 
        </li>
    )
}
export default Note;