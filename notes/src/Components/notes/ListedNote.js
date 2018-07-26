import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Notes.css';

const NoteTitle = styled(Link)`
    font-size: 24px;
    font-weight: 700px;
    justify-content: center;
    padding: 5px;
    margin-right: 240px;
    margin-top: 60px;
    font: Roboto Bold;
    display: flex;
    flex-flow: row wrap;
`;

const NoteBox = styled.div`

`

const ListedNote = ({ title, textBody, _id }) => {
    return (
        <div className="row">
        <div className="notes-box">
            <NoteTitle to={`/note/get/${_id}`}>{title}</NoteTitle>
            <p className="note-p">{textBody}</p>
            </div>
            </div>
    );
};

export default ListedNote;