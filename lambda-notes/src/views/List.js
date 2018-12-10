import React from 'react';
import NotesList from '../components/NotesList';
const List = props => {
    return (
        <>
            <h1>Your Notes:</h1>
            <NotesList notes={props.notes} />
        </>
    );
};

export default List;
