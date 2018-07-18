import React from 'react';
import { NotesCardLink, NotesCardContainer, NotesCardTitle, NotesContent } from '../ReusableComponents/Notes';

const NotesCard = props => {
    // Displays each note to the screen
    return (
        <NotesCardLink to={`/notes/${props.note._id}`}>

            <NotesCardContainer>
                <NotesCardTitle>{props.note.title}</NotesCardTitle>
                <NotesContent
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