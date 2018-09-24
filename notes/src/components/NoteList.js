import React from 'react';
import Note from './Note';
import {withRouter} from 'react-router-dom';

const NoteList = (props) => {
    return (
        <div className = 'note-list'>

            {props.notes.map(note => {
                return <Note {...note} key = {note._id} />
            })}

        </div>
    )
}

export default withRouter(NoteList);