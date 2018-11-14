import React from 'react';
import { connect } from 'react-redux';

import Note from './Note';

const NoteList = (props) => (
    <div>
        {props.notes.map(note => (
            <Note key={note.id} title={note.title} body={note.body} />
        ))}
    </div>
);

const mapStateToProps = state => ({
    notes: state.notes
});

export default connect(mapStateToProps)(NoteList);