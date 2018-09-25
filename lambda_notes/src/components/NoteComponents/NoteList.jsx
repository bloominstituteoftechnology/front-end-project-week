import React, { Fragment } from 'react';
import Styled from 'styled-components';

import Note from './Note';

function NoteList(props) {
    console.log('NOTE_LIST',props);
    return <Fragment>{props.notes.map(note => <Note key={note.id} note={note} />)}</Fragment>;
};

export default NoteList;