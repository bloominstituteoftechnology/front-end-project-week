import React from 'react';
import styled from 'styled-components';
import Note from './Note';
import NoteSelect from './NoteSelect'
import { Route } from 'react-router-dom';

const NoteList = ({ notes, noteClicked, noteChecked, noteUnChecked, history}) => {
    return (
        <NoteListContainer>
            <span className="title-seperator">NOTES</span>

            <Route
                path="/"
                exact
                render={props => 
                    notes.map(note => 
                        <Note 
                            note={note} 
                            key={note._id} 
                            noteClicked={e => noteClicked(e, note._id, history)}
                        />)
                }
            />
            <Route
                path="/select"
                exact
                render={props => 
                    notes.map(note => 
                        <NoteSelect
                            note={note} 
                            key={note._id} 
                            noteChecked={noteChecked}
                            noteUnChecked={noteUnChecked}
                    />)
                }
            />
        </NoteListContainer>
    );
}

export default NoteList;

const NoteListContainer = styled.form`
    width: 90%;
    column-count: 1;
    column-gap: 8px;
    margin: 0 auto;
    position: relative;
    @media (min-width: 625px) {
        width: 500px;
        column-count: 2;
    }
    @media (min-width: 1030px) {
        width: 750px;
        column-count: 3;
    }
    .title-seperator {
        color: #5f6368;
        font-family: Roboto,Arial,sans-serif;
        letter-spacing: 0.8px;
        font-size: 10px;
        font-weight: 600;
        position: absolute;
        left: 8px;
        top: -25px;
    }
`;
