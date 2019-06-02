import React from 'react';
import '../styles/NoteCard.css';
import { Link } from 'react-router-dom';


const noteCard = props => {
    return (
        <div className='noteCard-container'>
            <Link to={`/view/${props.noteInfo._id}`}>
                <div className='noteCard-content'>
                    <div className='noteCard-title'>{props.noteInfo.title}</div>
                    <div className='noteCard-textBody'>{props.noteInfo.textBody}</div>
                </div>
            </Link>
        </div>
    );
}

export default noteCard;