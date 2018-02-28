import React from 'react';

const NoteContainer = (props) => {
    return(
    <div>
        <h3>My notes</h3>
        <ul>
        { props.notes.map((note) => {
            return (
            <li className='Note'>
            <h5>{note.title}</h5>
            <div>{note.content}</div>
            </li>
            );
        })
        }
        </ul>  
    </div>    
    )
}
export default NoteContainer;