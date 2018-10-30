import React from 'react';
import { Link } from 'react-router-dom';
    
const ExpandedNote = props => {
    return (
        <div className='expandedNote'>
            <div>
                <Link to={`/editNote/${props.expandedNote.id}`}>edit</Link>
                <Link to={'/delete'}>delete</Link>
            </div>
            <h1>{props.expandedNote.title}</h1>
            <p>{props.expandedNote.text}</p>
            <div className='modal'>
                <div className='modalMenu'>
                    <p>Are you sure you want to delete this?</p>
                    <div className='modalButtons'>
                        <button className='button deleteButton'>Delete</button>
                        <button className='button retreatButton'>Retreat</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpandedNote;
