import React from 'react';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis'

const NotesCard = props => {
    return (
        <Link className='notes-card-link' to={`/notes/${props.note._id}`}>

            <div className='notes-card'>
                <h3 className='note-title'>{props.note.title}</h3>
                <LinesEllipsis
                    className='note-paragraph'
                    text={props.note.textBody}
                    maxLine='6'
                    ellipsis=' ...'
                    trimRight
                    basedOn='letters'
                />
            </div>

        </Link>
    );
}

export default NotesCard;