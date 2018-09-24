import React, { Fragment } from 'react';
import Styled from 'styled-components';

import Note from './Note';

function NoteList(props) {
    return <Fragment>{props.notes.map(note => <Note key={note.id} note={note} />)}</Fragment>;
};

export default NoteList;