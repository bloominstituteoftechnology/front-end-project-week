import React from 'react';
import Note from './Note';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NoteView from '../views/NoteView';

const Div = styled.div`
    width: 96.6%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 37px;
    margin-left: 6px;
`;

const NotesList = props => {
    return (
        <Div>
            {props.notes.length === 0 ? (
                <h1>Be patient the hamsters are getting really tired.</h1>
            ) : (
                props.notes.map(note => <Note note={note} />)
            )}
        </Div>
    );
};

export default NotesList;
