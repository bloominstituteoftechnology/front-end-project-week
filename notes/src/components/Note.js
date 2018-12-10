import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoteCard = styled.div`
    border: 1px solid black;
    width: 200px;
    height: 300px;
    margin: 30px;
    padding: 20px;
`;

const Note = props => {
    return (
        <Link to={`/note/${props.note._id}`}>
            <NoteCard>
                <h3>{props.note.title}</h3>
                <p>{props.note.textBody}</p>
            </NoteCard>
        </Link>
    )
}

export default Note;