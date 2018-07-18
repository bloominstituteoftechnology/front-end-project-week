import React from 'react';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import { NotesCardLink, NotesCardContainer, NotesCardTitle } from '../ReusableComponents/Notes';

const NotesCard = props => {
    // Displays each note to the screen
    return (
        <NotesCardLink to={`/notes/${props.note._id}`}>

            <NotesCardContainer>
                <NotesCardTitle className='note-title'>{props.note.title}</NotesCardTitle>
                <LinesEllipsis
                    className='note-paragraph'
                    text={props.note.textBody}
                    maxLine='6'
                    ellipsis=' ...'
                    trimRight
                    basedOn='letters'
                />
            </NotesCardContainer>

        </NotesCardLink>
    );
}

export default NotesCard;