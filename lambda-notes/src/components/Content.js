import React from 'react';
import NotesList from './NotesList';
const Content = props => {
    return (
        <>
            <h1>Your Notes:</h1>
            <NotesList notes={props.notes} />
        </>
    );
};

export default Content;
