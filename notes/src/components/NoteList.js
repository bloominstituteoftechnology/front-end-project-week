import React from 'react';
import { connect } from 'react-redux';

import Note from './Note';
import NoteListStyle from '../Styles/NoteList';

const NoteList = (props) => (
    <NoteListStyle>
        {props.notes.map(note => (
            <Note key={note.id} title={note.title} body={note.body} />
        ))}
    </NoteListStyle>
);

const mapStateToProps = state => ({
    notes: state.notes
});

export default connect(mapStateToProps)(NoteList);