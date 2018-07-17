import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Note from './Note';

const Content = styled.div`
    width: 666px;
    padding-top: 20px;
    padding-left: 3.48rem;
`

const Notes = styled.div`
    display: flex;
    flex-flow: row wrap;
`


const NoteList = props => {

    const notes = props.notes.length > 1
        ? <Notes>
            {props.notes.map(note =>
                <Link
                    to={`/notes/${note._id}`}
                    key={note._id}
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <Note note={note} />
                </Link>
            )}
        </Notes>
        : null

    return (
        <Content>
            <h1>Your Notes:</h1>
            {notes}
        </Content>
    )
}

export default NoteList;