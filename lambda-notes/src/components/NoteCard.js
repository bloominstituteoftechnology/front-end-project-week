import React from 'react';
import { Link } from "react-router-dom";
import { ContainCards, Cards } from '../Styles';

const NoteCard = props => {
    return (
        <Cards>
            <Link to={`/note/get/${props.note._id}`}>
                <h2>{props.note.title}</h2>
                <p>{props.note.textBody}</p>
            </Link>
        </Cards>
    );
}

export default NoteCard;