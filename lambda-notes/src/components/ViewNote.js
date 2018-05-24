import React from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from './DeleteNote';

const ViewNote = props => {
    return (
        <div>
            <div>
                <div>
                    <Link to={`/${props.current.id}/edit`}>
                        <p className='edit-link'>edit</p>
                    </Link>
                </div>
                <DeleteNote currentNoteID={props.current.id} />
            </div>
            <h4>{props.current.title}</h4>
            <div className='view-note-content'>{props.current.textBody}</div>
        </div>
    )
}

export default ViewNote;