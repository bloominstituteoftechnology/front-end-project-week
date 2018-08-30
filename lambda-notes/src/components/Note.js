import React from 'react';
import Delete from './Delete';

const Note = props => {
    if (props.data) {
        return (
            <div className='note-container'>
                <div className='note-list'>
                    <div className='note'>
                        {props.data.title}
                        <hr></hr>
                        {props.data.content}   
                    </div>
                </div>
            </div>
        )

    } else {
        const id = Number(props.match.params.id.replace(':', ''));
        const note = props.fetchNote(id);
        return (
            <div className='note-view-container'>
                <div className='note-view-top'>
                    <h3 className='note-title'>
                        {note.title}
                    </h3>
                    <div>
                        <a href='#' className='edit-delete'>edit</a>
                        <a href='#' className='edit-delete'>delete</a>
                    </div>
                </div>
                <div className='note-view-body'>
                    <p>
                        {note.content}
                    </p>
                    <Delete toggle={props.displayDelete} />
                </div>
            </div>
        )
    }
};

export default Note;