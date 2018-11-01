import React from 'react';


//styling
import './NoteView.css';

const NoteView = props => {
    console.log(props.note)
    return (
        <div className='noteView'>
            <p className='noteControl'>
                <span onClick={() => props.editNote(props)}className='editButton'>edit</span>
                <span className='deleteButton'>delete</span>
            </p>
            <div className='note'>
                <h3>{props.note.title}</h3>
                <p className='noteText'>{props.note.textBody}</p>
            </div>
        </div>
    );
}
 
export default NoteView;