import React from 'react';
import Note from './Note';
import styled from 'styled-components';

const Div = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 41px;
    margin-left: 4px;
`;

const NotesList = props => {
    return (
        <Div>
            {props.notes.length === 0 ? (
                <h1>Be patient we are loading the notes</h1>
            ) : (
                props.notes.map(note => <Note key={note._id} note={note} />)
            )}
        </Div>
    );
};

export default NotesList;
