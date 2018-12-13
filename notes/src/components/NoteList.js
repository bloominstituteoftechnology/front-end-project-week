import React, { Component } from 'react';


import Note from './Note';
import NoteListStyle from '../Styles/NoteList';

class NoteList extends Component {
    render() {
        return (
            <NoteListStyle>
                {this.props.notes.map(note => (
                    <Note key={note._id} title={note.title} body={note.textBody} id={note._id} />
                ))}
            </NoteListStyle>     
        )
    }
}

export default NoteList;