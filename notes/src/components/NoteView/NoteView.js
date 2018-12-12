import React from 'react';

import Delete from '../Delete/Delete';

//styling
import './NoteView.css';

const NoteView = props => {
    return (
        <div>
            {props.deleteModal 
                ? <Delete 
                    deleteModal={props.deleteModal}
                    goHome={props.goHome}
                    deleter={props.deleter}
                    note={props.note}
                />
                : null
            }
            <div className='noteView'>
                <p className='noteControl'>
                    <span onClick={() => props.editNote(props)} className='editButton'>edit</span>
                    <span onClick={(event) => props.deleteNote(event)} className='delete'>delete</span>
                </p>
                <div className='note'>
                    <h3>{props.note.title}</h3>
                    <p className='noteText'>{props.note.textBody}</p>
                </div>
            </div>
        </div>
    );
}
 
export default NoteView;