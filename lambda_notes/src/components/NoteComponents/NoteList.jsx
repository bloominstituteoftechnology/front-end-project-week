import React, { Fragment } from 'react';

import Note from './Note';

function NoteList(props) {
    if (props.notes === undefined ) return null;
    return <Fragment>{props.notes.map(note => <Note key={note._id} note={note} />)}</Fragment>;
};

export default NoteList;